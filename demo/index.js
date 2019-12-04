import { render, h} from "../dist/panreact";



// const App = (
//     <div>
//         hello<span onClick="click" style={{color: "red"}} data="data-test">world!</span>
//     </div>
// );


function App(props) {
    const click = (e) => {
        console.log(123);
    }

    return (
        <div>
            hello<span onClick="click" style={{ color: "red" }} data="data-test">world!</span>
        </div>
    )
}


render(<App /> , document.getElementById("app"));
// render(App(), document.getElementById("app"));