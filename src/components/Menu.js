import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class MenuBar extends React.Component {
    state = { data : [], selectedTab: '' }

    componentDidMount() {
        this.setState({selectedTab: 'Home'})
        this.renderData()
    }

    renderData = async () => {
        const response = await fetch('https://okz.moe/wizardamigos/wp-json/menus/v1/menus/2')
            .then(res => res.json())
            .then(data => data.items)

        this.setState({ data: response })
    }
    clickMenuTab = (ind) => {
        this.setState({selectedTab: this.state.data[ind].title})
        return this.state.data[ind]
    }
        
        
    displayContent = () => {
        // /  {/* </Menu> */}
    // <Menu secondary>
        return (
             <div className="ui secondary menu">

            {this.state.data.map((el, index) => {
                
                console.log(this.state.selectedTab)
                // console.log(el.title)
                return (
                    // <Menu.Item name={`${el.title}`} active={this.state.selectedTab === el.title} onClick={() => this.clickMenuTab(index)} key={index}>
                    <div className={`${this.state.selectedTab === el.title ? 'active' : ''} item`} key={index}>

                    <Link 
                        to={el.title === 'Home' ? '/' : `/${el.title.toLowerCase()}`} 
                        >{el.title}</Link>
                    </div>
                    // </Menu.Item>
                    )}
                )}
           </div>
        )
    }

    render() {
        if (!this.state.data.length === 0) return (<div>Loading...</div>)

        return <div>{this.displayContent()}</div>
    }
}

export default MenuBar