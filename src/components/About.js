import React from 'react'

class About extends React.Component {
    state = { content: '' }
    
    componentDidMount() {
        this.renderData()
    }
    
    renderData = async () => {
        await fetch('https://okz.moe/wizardamigos/wp-json/wp/v2/pages')
        .then(res => res.json())
        .then(data => {
            data.map(dataList => dataList.title.rendered === 'About' ? 
                this.setState({ content: dataList.content.rendered}) : ''        
            )}
        )
    }
    
    renderContent = () => {
        return <div>{this.state.content}</div>
    }


    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default About