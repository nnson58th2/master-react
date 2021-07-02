import React, { Component } from 'react'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      check: true,
      name: 'Son',
      products: [
        {
          name: 'IPhone'
        },
        {
          name: 'Samsung'
        },
        {
          name: 'Oppo'
        }
      ]
    }
  }

  renderProduct = () => {
    return this.state.products.map((product, index) => <div key={index}>{product.name}</div>)
  }

  render() {
    return (
      <div>
        {this.state.check ? <p>Đã check</p> : null}
        {this.state.check && <p>Đã check</p>}
        {!this.state.check && <p>Chưa check</p>}
        {this.state.check && (
          <React.Fragment>
            <span>Tên: </span>
            <span>{this.state.name}</span>
          </React.Fragment>
        )}

        {this.renderProduct()}
      </div>
    )
  }
}
