import React from 'react'

const withMouse = (Component) => {
    class WrapperComponent extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                posX: 0,
                posY: 0,
            }
        }

        componentDidMount() {
            window.addEventListener('mousemove', this.handleMouseMove)
        }

        componentWillUnmount() {
            window.removeEventListener('mousemove', this.handleMouseMove)
        }

        handleMouseMove = (evt) => {
            this.setState({
                posX: evt.clientX,
                posY: evt.clientY,
            })
        }
    
        render() {
            return <Component {...this.state}/>
        }
    }

    return WrapperComponent;
}

export default withMouse;