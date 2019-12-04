import { render, h} from "../dist/panreact";


const App = (
    <div>
        hello<span>world!</span>
    </div>
);

// function App(props) {
//     return (
//         <div>
//             hello<span>world!</span>
//         </div>
//     )
// }


render(App , document.getElementById("app"));
// render(App(), document.getElementById("app"));