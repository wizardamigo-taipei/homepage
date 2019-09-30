import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'

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
        return (
            <div id='menu' className="ui top menu">
                {this.state.data.map((el, index) => (
                    <div className="sub-menu" key={index} onClick={() => this.clickMenuTab(index)}>
                        <Link 
                            className={`${this.state.selectedTab === el.title ? 'active' : ''} item`}
                            to={{ pathname: el.title === 'Home' ? '/' : `/${el.title.toLowerCase()}`,
                                query: {tabData: this.state.data[index]}
                            }}
                        >{el.title}</Link>
                    </div>
                    )
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