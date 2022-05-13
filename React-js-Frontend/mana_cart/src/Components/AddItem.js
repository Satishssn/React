import React from 'react';


class AddItem extends React.Component {
    //state = {} ---> hook?
    constructor(props){
super(props);
this.state = {
    productName:"",
    productPrice:0,
};
    }

    render() {
        return (
            <form className='row mb-5 ' onSubmit={(e) => 
                {e.preventDefault(); this.props.addItem(this.state.productName, 
                Number(this.state.productPrice));}}>
                <div className="mb-3 col-4">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" name='productName' 
                    onChange={(e) => {this.setState({productName: e.currentTarget.value}); }}
                    aria-describedby="name" 
                    value= {this.state.productName}/>
                    <div id="emailHelp" className="form-text">We'll never share your name/email with anyone else.</div>
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" name='productPrice'
                    onChange={(e) => {this.setState({productPrice: Number(e.currentTarget.value)}); }}
                    value= {this.state.productPrice} />
                </div>
                <div className="mb-5 form-check col-2">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" >Add</button>
            </form>
            //onClick={() => {this.props.AddItem()}}
        );
    }
}

export default AddItem;