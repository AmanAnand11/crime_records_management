import React, { useState, useEffect } from 'react';
import ViewCase from './ViewCase';
import { Link } from 'react-router-dom';

// import SimpleStorageContract from "../contracts/SimpleStorage.json";
// import getWeb3 from "../utils/getWeb3";

// import '../CSS/policeList.css';

function CaseList() {
    const [details, setDetails] = useState([]);
//     const [web3, setWeb3] = useState(null);
//     const [accounts, setAccounts] = useState(null);
//     const [contract, setContract] = useState(null);
    const [getDetailsOf, setGetDetailsOf] = useState(null);
    
//     useEffect(() => {
//     async function fetchData() {
//     try {
//     // Get network provider and web3 instance.
//     const web3 = await getWeb3();
//         // Use web3 to get the user's accounts.
//         const accounts = await web3.eth.getAccounts();

//         // Get the contract instance.
//         const networkId = await web3.eth.net.getId();
//         const deployedNetwork = SimpleStorageContract.networks[networkId];
//         const instance = new web3.eth.Contract(
//           SimpleStorageContract.abi,
//           deployedNetwork && deployedNetwork.address,
//         );
//         // Set web3, accounts, and contract to the state, and then proceed with an
//         // example of interacting with the contract's methods.
//         setWeb3(web3);
//         setAccounts(accounts);
//         setContract(instance);
//         runExample();
//         getVal();
//       } catch (error) {
//         // Catch any errors for any of the above operations.
//         alert(
//           `Failed to load web3, accounts, or contract. Check console for details.`,
//         );
//         console.error(error);
//       }
//     }
//     fetchData();
// }, []);
    
// const getVal = async () => {
//     if (!contract) return;
//     const response2 = await contract.methods.getAllCrimeDetails().call();
//     setDetails(response2);
//     console.log(details);
//     };
//     const runExample = () => {
//         if (!contract) return;
//         // Stores a given value, 5 by default.
//         contract.methods.set(5).send({ from: accounts[0] });
//         // Get the value from the contract to prove it worked.
// contract.methods
// .get()
// .call({ from: accounts[0] })
// .then((result) => {
//   // Update state with the result.
//   setValue(result);
// })
// .catch((error) => {
//   // Catch errors.
//   console.log(error);
// });
// };
    /*componentDidMount = async () => {
        try {
          // Get network provider and web3 instance.
          const web3 = await getWeb3(); 

          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();

          // Get the contract instance.
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = SimpleStorageContract.networks[networkId];
          const instance = new web3.eth.Contract(
            SimpleStorageContract.abi,
            deployedNetwork && deployedNetwork.address,
          );          
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          this.setState({ web3, accounts, contract: instance }, this.runExample);     
          this.getVal();         


        //   // bootstrap links
        // const script1 = document.createElement("script");
        // const script2 = document.createElement("script");
        // const script3 = document.createElement("script");

        // const link = document.createElement("link");

        // script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
        // script2.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
        // script3.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
        // link.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
        
        // script1.async = true;
        // script2.async = true;
        // script3.async = true;
        // link.async = true;
    
        // document.body.appendChild(script1);
        // document.body.appendChild(script2);
        // document.body.appendChild(script3);
        // document.body.appendChild(link);

        } catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
      };*/
      

      /*getVal= async () =>{
        const { accounts, contract } = this.state;  
                var response2 = await contract.methods.getAllCrimeDetails().call(); 
                this.setState({
                    details: response2
                }); 
                console.log(this.state.details);           
      };*/

      var arr = [];
for (var key in details) {
arr.push(details[key]);
}
const handleClick = (clicked) => {
    setGetDetailsOf(clicked);
  };

const crimes =
arr.length > 0 ? (
arr.map((arr) => {
const toLink = "forensicUpdate/" + arr.crime_id;
return (
<Link to={toLink} key={arr.crime_id}>
<div className="card">
<div className="row listItem">
<div className="col s3 black-text">
<h6>{arr.crime_id}</h6>
</div>
<div className="col s3 black-text ">
<h6>{arr.offense_code}</h6>
</div>
<div className="col s3 black-text ">
<h6>{arr.description}</h6>
</div>
<div className="col s3 black-text ">
<h6>{arr.timestamp}</h6>
</div>
</div>
</div>
</Link>
);
})
) : (
    <div className="error">
    <h3>No crimes!</h3>
    </div>
    );
    return (
        <div className="notes">
          {crimes}
        </div>
      );
    }
    
    export default CaseList;





   /* render() {
        var arr = [];
        var details = this.state.details;
        for (var key in details) {
            arr.push(details[key]);
        }

        const crimes = arr.length ?
        (
            arr.map(arr => 
            {
                var toLink = "forensicUpdate/" + arr.crime_id;
            return (
                <Link to = {toLink}>

                <div className = "card" key = {arr.crime_id}>
                <div className="row listItem" >
                        <div className="col s3 black-text">
                            <h6>{arr.crime_id}</h6>
                        </div>
                        <div className="col s3 black-text ">
                            <h6>{arr.offense_code}</h6>
                        </div>
                        <div className="col s3 black-text ">
                            <h6>{arr.description}</h6>
                        </div>
                        <div className="col s3 black-text ">
                            <h6>{arr.timestamp}</h6>
                        </div>
                    </div>
                </div>
                </Link>
                )
            })
        ):
        (       
                <div className="error">
                    <h3>No crimes!</h3>
                </div>
        )

         return(
            <div className="notes">
                {crimes}
             </div>
         )
    }
    clicked = (clicked) =>
    {
        this.setState({
            getDetailsOf : clicked
        })

    }   
}

export default CaseList;*/