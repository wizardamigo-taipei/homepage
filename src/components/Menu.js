import React from 'react'
import { Menu } from 'semantic-ui-react'

class MenuBar extends React.Component {
    state = { data : [], selectedTab: '' }

    componentDidMount() {
        this.renderData()
    }

    renderData = async () => {
        const response = await fetch('https://okz.moe/wizardamigos/wp-json/menus/v1/menus/2')
            .then(res => res.json())
            .then(data => data.items)

        this.setState({ data: response })
    }

    clickMenuTab = (ind) => {
        console.log(this.state.data[ind])
        return this.state.data[ind]
    }

    displayContent = () => {
        return (
            <Menu secondary>
                {this.state.data.map((el, index) => (
                    <Menu.Item active={this.state.selectedTab} onClick={() => this.clickMenuTap(index)} key={index}>{el.title}</Menu.Item>
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