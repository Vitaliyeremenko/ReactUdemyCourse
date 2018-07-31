import React, {Component} from 'react';
import Button from "../../../components/UI/Button/Button";
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from "./ContactData.css";
import axios from '../../../axios-orders';


class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    };

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Bill',
                address : {
                    street: 'TESTSTREET12',
                    zipCode: '42342',
                    country: 'USA'
                },
                email: 'email@g.co'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json',order)
            .then(res => {
                this.setState({loading: false, purchasing: false});
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({loading: false, purchasing: false})
            });


        console.log(this.props.ingredients)
    };

    render() {
        let form = (<form >
            <input className={classes.Input} type="text" name='name' placeholder="Name"/>
            <input className={classes.Input} type="email" name='email' placeholder="Email"/>
            <input className={classes.Input} type="text" name='street' placeholder="Street"/>
            <input className={classes.Input} type="text" name='postal' placeholder="Postal Code"/>
            <Button btnType="Success" clicked={this.orderHandler}>Order</Button>

        </form>);
        if (this.state.loading){
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Entry your contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;