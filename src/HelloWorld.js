import React, {Component} from 'react';
import './App.css';


class HelloWorld extends Component{
    constructor(props){
        super(props);
        this.state = {salam : 'Helloww '};
    }

    /*=> (bind) agar tepat sasaran ke salam,
    karena menggunakan setState untuk merubah data yang ada di salam, otomatis merender ulang */

    salamkan = () => {
        this.setState({salam : 'Salam Untukmu '});
    }

    render(){
        return(
            <div className="warna">
            {this.state.salam}<br/>
            {this.props.namaDepan} {this.props.namaBelakang}
            <br />
            <button onClick={this.salamkan}>Salam!</button>
            </div>
        );
    }
}

export default HelloWorld;