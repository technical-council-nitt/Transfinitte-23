import React, { useState } from "react";
import { Select, TextInput,BackgroundImage, Text } from "@mantine/core";
import logo from "../../assets/logo.svg";
import qr from "../../assets/qr.jpg";
import bg from "../../assets/bg.png";
import { showNotification,updateNotification } from '@mantine/notifications';
import { IconCheck } from "@tabler/icons-react";

import "./register.css";

const Register = () => {
  const [teamLeaderName, setTeamLeaderName] = useState("");
  const [teamLeaderRollNo, setTeamLeaderRollNo] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([]);
  const [domain, setDomain] = useState("");
  const [tempName, setTempName] = useState("");
  const [tempRollno, setTempRollno] = useState("");
  const [paymentProofLink, setPaymentProofLink] = useState("");
  const comingSoon = false;
  const validateForm = () => {
    const teamLeaderRollNoPattern = /^\d{9}$/;
    if (!teamLeaderRollNoPattern.test(teamLeaderRollNo)) {
      
      showNotification({
        title: 'Please enter a valid Roll Number',
      })
      return false;
    }
    const phoneNumberPattern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (!phoneNumberPattern.test(contactNumber)) {
      showNotification({
        title: "Please enter a valid phone number",
      })
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      showNotification({
        title: "Please enter a valid email address",
      })
      return false;
    }
    const memberRollNoPattern = /^\d{9}$/;
    for (const member of members) {
      if (!memberRollNoPattern.test(member.rollNo)) {
        showNotification({
          title: "Please enter a valid Roll Number",
        })
        return false;
      }
    }

    if (members.length < 3 || members.length > 5) {
      showNotification({
        title: "Team size should be 4-6",
      })
      return false;
    }
    const driveLinkPattern = /^https:\/\/drive\.google\.com\/.*$/;
    if (!driveLinkPattern.test(paymentProofLink)) {
      showNotification({
        title: "Please enter a valid Google Drive link for payment proof",
      })
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(teamLeaderName);
    if (validateForm()) {
      const formData = new FormData();
      formData.append("TeamLeaderName", teamLeaderName);
      formData.append("TeamLeaderRollNo", teamLeaderRollNo);
      formData.append("ContactNumber", contactNumber);
      formData.append("Email", email);
      formData.append("TeamName", teamName);
      formData.append("Members", JSON.stringify(members));
      formData.append("Domain", domain);
      formData.append("PaymentProof", paymentProofLink);

      console.log(formData);
      const action =
        "https://script.google.com/macros/s/AKfycbzckIJzHbGiQuUVH1hgDzr28VNuyA7COGSGTFM0YV6xg3ActenbUesTzNOaI45GxYUF/exec";
      showNotification({
        id: 'load-data',
        loading: true,
        title: 'Registering your team',
        message: 'This may take few seconds',
        autoClose: false,
        disallowClose: true,
      });
      fetch(action, {
        method: "POST",
        body: formData,
      }).then(() => {
        updateNotification({
          id: 'load-data',
          color: 'teal',
          title: 'Successfully Registered!',
          message : "Redirecting to main page in 2s",
          icon: <IconCheck size={16} />,
          autoClose: 2000,
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      });
    }
  };

  const addMember = () => {
    if (tempName.trim() !== "" && tempRollno.trim() !== "") {
      setMembers([...members, { name: tempName, rollNo: tempRollno }]);
      setTempName("");
      setTempRollno("");
    }
  };

  const removeMember = (indexToRemove) => {
    setMembers((prevMembers) =>
      prevMembers.filter((_, index) => index !== indexToRemove)
    );
  };
  if(comingSoon){
    return(
      <div className="containerreg">
      <div style={{textAlign : "center"}}>
      <h1>Registrations opening Soon..</h1>
        <a href="/" style={{color : "#f5bffb", textDecoration : "none"}}>Back to home page</a>
      </div>
        
      </div>
    )
  }
  return (
    <BackgroundImage src={bg} className="landingbg">
    <div>
    <div className="containerreg">
      <h1>Registration Page</h1>

      <form id="my-form" onSubmit={handleSubmit}>
        <div>
          
          <TextInput
            name="TeamLeaderName"
            label="Team Leader's Name"
            style={{width : "95%"}}
            type="text"
            id="teamLeaderName"
            value={teamLeaderName}
            onChange={(e) => setTeamLeaderName(e.target.value)}
            required
            styles={(theme) => ({
              label: {
                color : "white",
                fontSize : "1rem",
              },
              
            })}
          />
        </div>
        <div>
          <TextInput
            name="TeamLeaderRollNo"
            label="Team Leader's Roll Number"
            type="text"
            id="teamLeaderRollNo"
            value={teamLeaderRollNo}
            onChange={(e) => setTeamLeaderRollNo(e.target.value)}
            style={{width : "95%"}}
            required
            styles={(theme) => ({
              label: {
                color : "white",
                fontSize : "1rem",
              },
              
            })}
          />
        </div>
        <div>
          <TextInput
            name="ContactNumber"
            label="Contact Number"
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            style={{width : "95%"}}
            required
            styles={(theme) => ({
              label: {
                color : "white",
                fontSize : "1rem",
              },
              
            })}
          />
        </div>
        <div>
          <TextInput
            name="Email"
            type="email"
            label="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{width : "95%"}}
            required
            styles={(theme) => ({
              label: {
                color : "white",
                fontSize : "1rem",
              },
              
            })}
          />
        </div>
        <div>
          <TextInput
            name="TeamName"
            type="text"
            label="Team Name"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            style={{width : "95%"}}
            required
            styles={(theme) => ({
              label: {
                color : "white",
                fontSize : "1rem",
              },
              
            })}
          />
        </div>
        <div>
          <div>
            <Text c={"white"} style={{fontWeight : 600, marginBottom : '0.5rem'}}>Members</Text>
            <ul className="members-list">
              {members.map((member, index) => (
                <li key={index}>
                  <div>
                    <strong>Name:</strong> {member.name}
                  </div>
                  <div>
                    <strong>Roll Number:</strong> {member.rollNo}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeMember(index)}
                    className="btnreg"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="memberInput">
              <TextInput
            type="text"
            placeholder="Name"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
            // style={{width : "95%"}}
            
            styles={(theme) => ({
              label: {
                color : "white",
                fontSize : "1rem",
              },
              
            })}
          />
              
              <TextInput
            type="text"
                value={tempRollno}
                onChange={(e) => setTempRollno(e.target.value)}
                placeholder="Roll Number"
            // style={{width : "100%"}}
            styles={(theme) => ({
              label: {
                color : "white",
                fontSize : "1rem",
              },
              
            })}
          />
            </div>
            <button type="button" onClick={addMember} className="btnreg">
              Add Member
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="domain">Domain:</label>
          <Select
            placeholder="Pick one"
            onChange={(e) => setDomain(e)}
            name="Domain"
            id="domain"
            required
            transition="pop-top-left"
            transitionDuration={80}
            transitionTimingFunction="ease"
            data={[
              { value: "Software", label: "Software" },
              { value: "Hardware", label: "Hardware" },
            ]}
            styles={(theme) => ({
              root: {
                marginBottom: "2rem",
                width : "95%",
              },
              item: {
                "&[data-selected]": {
                  "&, &:hover": {
                    backgroundColor: "#70157a",
                    color: "white",
                  },
                },

                "&[data-hovered]": {},
              },
            })}
          />
        </div>
        <Text c={"white"} style={{fontWeight : 600, marginBottom : '0.5rem'}}>UPI QR CODE</Text>
        <Text c={"white"} style={{fontWeight : 600, marginBottom : '0.5rem'}}>Participation fee : Rs. 500</Text>
        <img src={qr} style={{marginBottom : "1rem"}} className="qr"></img>
        <div>
          
          <TextInput
            type="text"
            id="paymentProofLink"
            label="Payment Proof (Drive Link)"
            value={paymentProofLink}
            onChange={(e) => setPaymentProofLink(e.target.value)}
            style={{width : "95%"}}
            required
            styles={(theme) => ({
              label: {
                color : "white",
                fontSize : "1rem",
              },
              
            })}
          />
        </div>
          
        <button type="submit" className="btnreg2">
          Register
        </button>
        <a href="/">Back to home page</a>
      </form>
    </div>
    </div>
    </BackgroundImage>

  );
};

export default Register;

// import React, { useState } from "react";
// import { Select, TextInput } from "@mantine/core";
// import "./register.css";

// const Register = () => {
//   const [teamLeaderName, setTeamLeaderName] = useState("");
//   const [teamLeaderRollNo, setTeamLeaderRollNo] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [teamName, setTeamName] = useState("");
//   const [members, setMembers] = useState([]);
//   const [domain, setDomain] = useState("");
//   const [tempName, setTempName] = useState("");
//   const [tempRollno, setTempRollno] = useState("");

//   const validateForm = () => {
//     // Implement validation logic here, e.g., check if rollNo is a valid integer, and other constraints.
//     // Return true if the form is valid, otherwise false.
//     // You can display validation errors as needed.
//     return true; // Return true for now; add your validation logic.
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const formData = new FormData();
//       formData.append("TeamLeaderName", teamLeaderName);
//       formData.append("TeamLeaderRollNo", teamLeaderRollNo);
//       formData.append("ContactNumber", contactNumber);
//       formData.append("Email", email);
//       formData.append("TeamName", teamName);
//       formData.append("Members", JSON.stringify(members));
//       formData.append("Domain", domain);
//       console.log(formData);

//       const action = "https://script.google.com/macros/s/AKfycbzckIJzHbGiQuUVH1hgDzr28VNuyA7COGSGTFM0YV6xg3ActenbUesTzNOaI45GxYUF/exec";

//       fetch(action, {
//         method: "POST",
//         body: formData,
//       }).then(() => {
//         alert("Success!");
//       });
//     }
//   };

//   const addMember = () => {
//     if (tempName.trim() !== "" && tempRollno.trim() !== "") {
//       setMembers([...members, { name: tempName, rollNo: tempRollno }]);
//       setTempName("");
//       setTempRollno("");
//     }
//   };

//   const removeMember = (indexToRemove) => {
//     setMembers((prevMembers) =>
//       prevMembers.filter((_, index) => index !== indexToRemove)
//     );
//   };

//   return (
//     <div className="containerreg">
//       <h1>Registration Page</h1>
//       <form id="my-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="teamLeaderName">Team Leader's Name:</label>
//           <input
//             name="TeamLeaderName"
//             type="text"
//             id="teamLeaderName"
//             value={teamLeaderName}
//             onChange={(e) => setTeamLeaderName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="teamLeaderRollNo">Team Leader's Roll Number:</label>
//           <input
//             name="TeamLeaderRollNo"
//             type="text"
//             id="teamLeaderRollNo"
//             value={teamLeaderRollNo}
//             onChange={(e) => setTeamLeaderRollNo(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="contactNumber">Contact Number:</label>
//           <input
//             name="ContactNumber"
//             type="text"
//             id="contactNumber"
//             value={contactNumber}
//             onChange={(e) => setContactNumber(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             name="Email"
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         {/* Rest of your form remains the same */}
//         {/* ... */}
//       </form>
//     </div>
//   );
// };

// export default Register;
