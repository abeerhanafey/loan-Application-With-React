import './App.css';
import {useEffect, useState} from 'react'
import ToastMessage from './ToastMessage';
function App() {
  const [data, setData] = useState({
    name: "",
    age: "",
    phone: "",
    employee: false,
    salary: "less than 500$"
  })

  const [message, setMessage] = useState("")
  const [style, setStyle] = useState()
  const [buttonStyle, setButtonStyle] = useState()


  useEffect(() => {
    setStyle({ display: "none" })
   
  }, []);

  useEffect(() => {
    if (data.name === "" || data.age === "" || data.phone === "" ) {
      // setDisabledButton(false)
      setButtonStyle({backgroundColor: "#aaa",
        border: "2px solid #333",
        color: "#333",
      opacity: ".6"})
    } else {
      // setDisabledButton(true)
      setButtonStyle({backgroundColor: "rgb(253, 215, 223)",
        border: "2px solid crimson",
        color: "crimson"})
    }
  }, [data])
  
  // function submitFunc() {
  //   console.log(data);
  // }
  return (
    <div className="App">
      <form>
        <h1>Regestration Loan</h1>
        <div className="name">
          <label>Enter your name</label>
          <input type="text" value={data.name} onChange={(ele) => { setData({ ...data , name: ele.target.value })}} />
        </div>
          <div className="phoneNum">
          <label>Enter your phone</label>
          <input type="text" value={data.phone} onChange={(ele) => { setData({ ...data , phone: ele.target.value })}} />
        </div>
        <div className="age">
          <label>Enter your age</label>
          <input type="text" value={data.age} onChange={(ele) => { setData({ ...data , age: ele.target.value })}}/>
        </div>
        <div className="employee">
          <label>Aِِre you employee?</label>
          <input type="checkbox" value={data.employee} onChange={(ele) => { setData({ ...data , employee: ele.target.checked })}}/>
        </div>
        <div className="salary">
          <label>salary</label>
          <select value={data.salary} onChange={(ele) => {setData({...data, salary: ele.target.value})}}>
            <option>less than 500$</option>
            <option>between 500$ and 2000$</option>
            <option>more than 2000$</option>
          </select>
        </div>
        <button style={buttonStyle} onClick={(event) => {
          if (data.name === "") {
            event.preventDefault()
            setTimeout(() => {
              setStyle({ display: "block" });
              setTimeout(() => {
                setStyle({display: "none"})
              }, 3000);
            }, 500);
            setMessage("Enter Your Name Please !");
            console.log("enter name");
          } else if (data.phone.length < 10 || data.phone.length > 12) {
            event.preventDefault()
            setTimeout(() => {
              setStyle({ display: "block" });
              setTimeout(() => {
                setStyle({display: "none"})
              }, 3000);
            }, 500);
            setMessage("phone should be between 10 or 12 number !");
            console.log("enter phone");
          } else if (Number(data.age) < 18 || Number(data.age) > 100) {
            event.preventDefault()
            setTimeout(() => {
              setStyle({ display: "block" });
              setTimeout(() => {
                setStyle({display: "none"})
              }, 3000);
            }, 500);
            setMessage("Enter Suitable Age Please !");
            console.log("enter age");
          } else if (data.employee === "") {
            event.preventDefault()
            setTimeout(() => {
              setStyle({ display: "block" });
              setTimeout(() => {
                setStyle({display: "none"})
              }, 3000);
            }, 500);
            setMessage("What's Your State ?! ");
            console.log("enter state");
          } else if (data.salary === "") {
            event.preventDefault()
            setTimeout(() => {
              setStyle({ display: "block" });
              setTimeout(() => {
                setStyle({display: "none"})
              }, 3000);
            }, 500);
            setMessage("Enter Your Salary Please !");
            console.log("enter salary");
          } else {
            event.preventDefault()
            setTimeout(() => {
              setStyle({ display: "block", color: "green" });
              setTimeout(() => {
                setStyle({display: "none"})
              }, 3000);
            }, 500);
            setMessage("Form Sent Successfully !");
          }
          // submitFunc()
          console.log(data);
        }}>Submit</button>
      </form>
      <ToastMessage message={ message } style={style} />
    </div>
  );
}

export default App;
