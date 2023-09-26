import React, { useState } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamLeader, setTeamLeader] = useState("");
  const [members, setMembers] = useState([]);
  const [domain, setDomain] = useState("");
  const [tempName, setTempName] = useState("");
  const [tempRollno, setTempRollno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("RollNo", rollNo);
    formData.append("TeamName", teamName);
    formData.append("TeamLeaderName", teamLeader);
    formData.append("Members", JSON.stringify(members));
    formData.append("Domain", domain);
    console.log(formData);
    const action =
      "https://script.google.com/macros/s/AKfycbzckIJzHbGiQuUVH1hgDzr28VNuyA7COGSGTFM0YV6xg3ActenbUesTzNOaI45GxYUF/exec";

    fetch(action, {
      method: "POST",
      body: formData,
    }).then(() => {
      alert("Success!");
    });
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

  return (
    <div>
      <h1>Registration Page</h1>
      <form id="my-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="Name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rollNo">Roll Number:</label>
          <input
            name="RollNo"
            type="text"
            id="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="teamName">Team Name:</label>
          <input
            name="TeamName"
            type="text"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="teamLeader">Team Leader:</label>
          <input
            name="TeamLeaderName"
            type="text"
            id="teamLeader"
            value={teamLeader}
            onChange={(e) => setTeamLeader(e.target.value)}
            required
          />
        </div>
        <div>
          <div>
            <label>Members:</label>
            <ul className="members-list">
              {members.map((member, index) => (
                <li key={index}>
                  <div>
                    <strong>Name:</strong> {member.name}
                  </div>
                  <div>
                    <strong>Roll Number:</strong> {member.rollNo}
                  </div>
                  <button type="button" onClick={() => removeMember(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="memberInput">
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="text"
                value={tempRollno}
                onChange={(e) => setTempRollno(e.target.value)}
                placeholder="Roll Number"
              />
            </div>
            <button type="button" onClick={addMember}>
              Add Member
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="domain">Domain:</label>
          <select
            name="Domain"
            id="domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            required
          >
            <option value="">Select Domain</option>
            <option value="Software">Software</option>
            <option value="Hardware">Hardware</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
