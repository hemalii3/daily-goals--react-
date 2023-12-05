import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
    

      const [tasks, settasks] = useState([]);
      const [title, settitle] = useState("");
      const [description, setdescription] = useState("");
      const deletesask=(index)=>{
            const fil = tasks.filter((val,i)=>{
                  return i !== index;
            });
            settasks(fil);

      }
      const submithandler = (e) => {
            e.preventDefault();
            settasks([...tasks,{title,description }]);
            settitle("");
            setdescription("");

      };
     
      return (
            <div className="container">
                  <h1>DAILY GOALS</h1>
                  <form onSubmit={ submithandler }>
                        <input placeholder="title" value={ title } onChange={ (e) =>
                              settitle(e.target.value)
                        } />
                        <textarea placeholder="description" value={ description } onChange={ (e) =>
                              setdescription(e.target.value)
                        }></textarea>
                        <button type="submit" className="add">ADD</button>
                  </form>

                  {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deletetask={deletesask}
          index={index}
          
        />
                  )) }


            </div>
      );
}

export default Home;


