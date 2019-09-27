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
        console.log(this.state.selectedTab.toLowerCase())
        
        let { selectedTab } = this.state
        let nav = selectedTab.toLowerCase() === 'home' ? '/' : '/'+selectedTab.toLowerCase()
        console.log(nav)
        return (
            <Link to={nav} 
                tabValues={this.state.data[ind]}
            />
        )
    }

    displayContent = () => {
        return (
            <Menu secondary>
                {this.state.data.map((el, index) => (
                    <Menu.Item name={`${el.title}`} active={this.state.selectedTab === el.title} onClick={() => this.clickMenuTab(index)} key={index}>{el.title}</Menu.Item>
                ))}
            </Menu>
        )
    }

    render() {
        if (!this.state.data.length === 0) return (<div>Loading...</div>)

        return <div>{this.displayContent()}</div>
    }
}

export default MenuBar