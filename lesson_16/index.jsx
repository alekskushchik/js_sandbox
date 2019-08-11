import React from 'react';
import ReactDOM from 'react-dom';
import Registration_1 from "./registration_1";
import Main_screen from './main_screen';
import Registration_2 from './registration_2';
import Loading from './loading';

const PREVIEW = 1;
const SECOND_STEP = 2;
const THIRD_STEP = 3;
const LOADING = 4;
const FAIL = 5;
const SUCCESS = 6;

class Authorize extends React.Component {
    constructor() {
        super();

        this.state = {
            step: PREVIEW,
            name: '',
            username: '',
            country: '',
            age: '',
            email: '',
            password: '',
        }
    }

    serverPush() {
        let obj = {
            'name': this.state.name,
            'username': this.state.username,
            'email': this.state.country,
            'password': this.state.password,
            'country': this.state.country,
            'age': this.state.age
        };

        fetch(`https://authserver.worldthirteen.now.sh/register`, {
                method: 'POST',
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj),
            }
        )
            .then((res) => console.log(res))
            .then((r) => console.log(r))
            .catch((err) => console.log(err))
    }

    update(value1, value2, value3, value4) {
        this.setState({
            name: value1,
            country: value2,
            username: value3,
            age: value4
        })
    }
    update2(value5, value6) {
        this.setState({
            email: value5,
            password: value6,
        })
    }

    nextStep() {
        const step = this.state.step + 1;
        this.setState({
            step
        });
    }

    CurrentStep(props) {
        switch (props.step) {
            case PREVIEW: return <Main_screen nextStep={props.handler} />;
            case SECOND_STEP: return <Registration_1 nextStep={props.handler} update={props.reg1} />;
            case THIRD_STEP: return <Registration_2 nextStep={props.handler} update2={props.reg2} serverPush={props.toPost} />;
            case LOADING: return <Loading nextStep={props.handler}> </Loading>
        }
    }

    render() {
        return (
            <div>
                <this.CurrentStep
    step={this.state.step}
    handler={this.nextStep.bind(this)}
    reg1={this.update.bind(this)}
    reg2={this.update2.bind(this)}
    toPost={this.serverPush.bind(this)}/>
            </div>
        )

    }
}

window.render = function render() {
    ReactDOM.render((
        <div>
            <Authorize/>
        </div>
    ), document.getElementById('root'));
};

render();