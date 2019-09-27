import React from 'react'

class Menu extends React.Component {
    state = { data : [] }

    componentDidMount() {
        this.renderData()
    }

    renderData = async () => {
        const response = await fetch('https://okz.moe/wizardamigos/wp-json/menus/v1/menus/2')
            .then(res => res.json())
            .then(data => data.items)

        this.setState({ data: response })
    }

    clickMenuTap = (ind) => {
        console.log(this.state.data[ind])
        return this.state.data[ind]
    }

    displayContent = () => {
        return (
            <ul>
                {this.state.data.map((el, index) => (
                    <li onClick={() => this.clickMenuTap(index)} key={index}>{el.title}</li>    
                ))}
            </ul>
        )
    }

    render() {
        if (!this.state.data.length === 0) return (<div>Loading...</div>)

        return <div>{this.displayContent()}</div>
    }
}

export default Menu