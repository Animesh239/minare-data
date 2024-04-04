import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
// import { RegistrationData } from "./data";

// const dataRows = Object.keys(RegistrationData).map((key, index) => {
//     // console.log(key, index, RegistrationData[key])
//   return {
//     id: index + 1,
//     branchOfStudy: Object.values(RegistrationData[key])[index].branchOfStudy,
//     collegeName: Object.values(RegistrationData[key])[index].collegeName,
//     email: Object.values(RegistrationData[key])[index].email,
//     fullname: Object.values(RegistrationData[key])[index].fullname,
//     phone: Object.values(RegistrationData[key])[index].phone,
//     transactionId: Object.values(RegistrationData[key])[index].transactionId,
//     yearOfGraduation: Object.values(RegistrationData[key])[index].yearOfGraduation,
//   };
// });

const data =  {"Registration": {
    "-NtMzbgdHkWx8c5eykzL": {
      "branchOfStudy": "Mining",
      "collegeName": "NITRKL",
      "email": "rahuldash.qwerty@gmail.com",
      "fullname": "Rahul Ranjan Dash",
      "phone": "7827500393",
      "transactionId": "408055633248",
      "yearOfGraduation": "2025"
    },
    "-Nu3EDJn0s_3jI0VBdZK": {
      "branchOfStudy": "Mining ",
      "collegeName": "AKS University satna ",
      "email": "harshankitsen@gmail.com",
      "fullname": "Harsh se ",
      "phone": "8305216950",
      "transactionId": "8305216950@ibl",
      "yearOfGraduation": "2025"
    },
    "-NuDM4BwRrMNRVINNAql": {
      "branchOfStudy": "Mining ",
      "collegeName": "Adarsha College Of Engineering ",
      "email": "sudhanshushekharjena2@gmail.com",
      "fullname": "Sudhanshu Shekhar Jena",
      "phone": "6370666844",
      "transactionId": "445680124374",
      "yearOfGraduation": "2024"
    },
    "-NuDNhh8tTHXa92fw8K2": {
      "branchOfStudy": "Mining ",
      "collegeName": "Adarsha College Of Engineering ",
      "email": "sudhanshushekharjena2@gmail.com",
      "fullname": "Swadesh Behera ",
      "phone": "6371838489",
      "transactionId": "445680124374",
      "yearOfGraduation": "2024"
    },
    "-NuDPQx1QZE4dLcYUpL9": {
      "branchOfStudy": "Mining",
      "collegeName": "Adarsha college Of Enigneering , Angul ",
      "email": "adarshaminingangul@gmail.com",
      "fullname": "Subhasish Barik ",
      "phone": "9337694270",
      "transactionId": "409054383955",
      "yearOfGraduation": "2024"
    },
    "-NuDQ88BHMW2HbZF0PpT": {
      "branchOfStudy": "Mining",
      "collegeName": "Adarsha college Of Enigneering , Angul ",
      "email": "adarshaminingangul@gmail.com",
      "fullname": "Santosh ku Nayak",
      "phone": "7847932906",
      "transactionId": "445653027220",
      "yearOfGraduation": "2024"
    },
    "-NuDQdLw79jpePyYmDDc": {
      "branchOfStudy": "Mining",
      "collegeName": "Adarsha college Of Enigneering , Angul ",
      "email": "adarshaminingangul@gmail.com",
      "fullname": "Rati Ranjan Sahu",
      "phone": "8260990851",
      "transactionId": "409037029417",
      "yearOfGraduation": "2024"
    },
    "-NuDTbPf4oYy0otTlD4B": {
      "branchOfStudy": "Mining ",
      "collegeName": "Adarsha College Of Engineering ",
      "email": "jyotiprakashdas88@gmail.com",
      "fullname": "Padmalochan Rout",
      "phone": "7847975937",
      "transactionId": "445666425093",
      "yearOfGraduation": "2024"
    },
    "-NuDTlAlU7YmXQpSxiO3": {
      "branchOfStudy": "Mining ",
      "collegeName": "Adarsha College Of Engineering ",
      "email": "jyotiprakashdas88@gmail.com",
      "fullname": "Amaresh Kar",
      "phone": "7894890983",
      "transactionId": "409033580506",
      "yearOfGraduation": "2026"
    },
    "-NuDUXgCErgGetsBYCdv": {
      "branchOfStudy": "Mining ",
      "collegeName": "Adarsha College Of Engineering ",
      "email": "jyotiprakashdas88@gmail.com",
      "fullname": "Narendra Kumar ",
      "phone": "8456824157",
      "transactionId": "409092427853",
      "yearOfGraduation": "2024"
    },
    "-NuHy90mpPGe4oFo4tbs": {
      "branchOfStudy": "Mining ",
      "collegeName": "Adarsha College Of Engineering ",
      "email": "sudhanshushekharjena2@gmail.com",
      "fullname": "Prabin Pradhan ",
      "phone": "9337483712",
      "transactionId": "409168976961",
      "yearOfGraduation": "2024"
    },
    "-NuHyRPcNOQnWH05Awd_": {
      "branchOfStudy": "Mining ",
      "collegeName": "Adarsha College Of Engineering ",
      "email": "sudhanshushekharjena2@gmail.com",
      "fullname": "Suryakanta Pradhan ",
      "phone": "9668640089",
      "transactionId": "445755274291",
      "yearOfGraduation": "2024"
    },
    "-NuO6tkAt_ZnTI7pn9w1": {
      "branchOfStudy": "Mining ",
      "collegeName": "Aditya engineering college ",
      "email": "singhnayan490@gmail.com",
      "fullname": "Nayan Kumar singh",
      "phone": "77640 0073",
      "transactionId": "409267846230",
      "yearOfGraduation": "2026"
    },
    "-NuO7n-4X64QlzMts9t1": {
      "branchOfStudy": "Mining engineering",
      "collegeName": "Aditya engineering college",
      "email": "ajaysingh20058@gmail.com",
      "fullname": "Ajay pratap mahato ",
      "phone": "9905044547",
      "transactionId": "409290747423",
      "yearOfGraduation": "2026"
    },
    "-NuO8Fo0GaNMrAOPx2Hk": {
      "branchOfStudy": "MINING",
      "collegeName": "ADITYA ENGINEERING COLLEGE ",
      "email": "shanmukhadavala12345@gmail.com",
      "fullname": "DAVALA SHANMUKHA RAO ",
      "phone": "9154508440",
      "transactionId": "445826645692",
      "yearOfGraduation": "2026"
    },
    "-NuOEF1GHb3LTWvuquzN": {
      "branchOfStudy": "Mining engineering ",
      "collegeName": "Aditya engineering College ",
      "email": "sunadhsisi45@gmail.com",
      "fullname": "K.SUNADH BABU",
      "phone": "7386230994",
      "transactionId": "445820245180",
      "yearOfGraduation": "2026"
    },
    "-NuOEW6PxC8pvFUZQsR1": {
      "branchOfStudy": "Mining engineering ",
      "collegeName": "Aditya Engineering College ",
      "email": "vpaleti959@gmail.com",
      "fullname": "P. Venkata vamsi Krishna ",
      "phone": "6281672160",
      "transactionId": "409276953009",
      "yearOfGraduation": "2026"
    },
    "-NuOEWhhzP9YacVe-7qM": {
      "branchOfStudy": "Mining engineering ",
      "collegeName": "Aditya Engineering College ",
      "email": "vpaleti959@gmail.com",
      "fullname": "P. Venkata vamsi Krishna ",
      "phone": "6281672160",
      "transactionId": "409276953009",
      "yearOfGraduation": "2026"
    },
    "-NuOQzGnZe1ZiY7VA9Io": {
      "branchOfStudy": "Mining",
      "collegeName": "Aditya University ",
      "email": "eakaanth.d@gmail.com",
      "fullname": "Douluri Eakaanth",
      "phone": "8341241832",
      "transactionId": "40",
      "yearOfGraduation": "2026"
    },
    "-NuORahivAA90i8X49La": {
      "branchOfStudy": "Mining",
      "collegeName": "Aditya University ",
      "email": "eakaanth.d@gmail.com",
      "fullname": "Douluri Eakaanth",
      "phone": "8341241832",
      "transactionId": "409203617577",
      "yearOfGraduation": "2026"
    },
    "-NuOvut6a4RBc6KKekAo": {
      "branchOfStudy": "MINING ENGINEERING ",
      "collegeName": "ADITYA Engineering College ",
      "email": "tejapeyyala2002@gmail.com",
      "fullname": "PEYYALA HIMAMTEJA",
      "phone": "9502162184",
      "transactionId": "445837754500",
      "yearOfGraduation": "3"
    },
    "-NuOwAUu-6sMu8mYEVCY": {
      "branchOfStudy": "MINING ENGINEERING ",
      "collegeName": "ADITYA Engineering College ",
      "email": "tejapeyyala2002@gmail.com",
      "fullname": "PEYYALA HIMAMTEJA",
      "phone": "9502162184",
      "transactionId": "445837754500",
      "yearOfGraduation": "3"
    },
    "-NuPBtM60AEPbxFWAl11": {
      "branchOfStudy": "MINING ENGINEERING ",
      "collegeName": "ADITYA Engineering College ",
      "email": "tejapeyyala2002@gmail.com",
      "fullname": "PEYYALA HIMAMTEJA",
      "phone": "9502162184",
      "transactionId": "445837754500",
      "yearOfGraduation": "2025"
    },
    "-NuPBtNCM5rAm-ieNZTJ": {
      "branchOfStudy": "MINING ENGINEERING ",
      "collegeName": "ADITYA Engineering College ",
      "email": "tejapeyyala2002@gmail.com",
      "fullname": "PEYYALA HIMAMTEJA",
      "phone": "9502162184",
      "transactionId": "445837754500",
      "yearOfGraduation": "2025"
    },
    "-NuPhGBj-eirnNwxA6CR": {
      "branchOfStudy": "Mining ",
      "collegeName": "Adarsha College Of Engineering ",
      "email": "sudhanshushekharjena2@gmail.com",
      "fullname": "Priyanka Khuntia ",
      "phone": "9348332370",
      "transactionId": "445865575974",
      "yearOfGraduation": "2027"
    },
    "-NuQMJzvU6jyndZ0cUNY": {
      "branchOfStudy": "MINING",
      "collegeName": "IIT KHARAGPUR",
      "email": "paramjeetkumar5689@gmail.com",
      "fullname": "Paramjeet Kumar",
      "phone": "7654116509",
      "transactionId": "445900489085",
      "yearOfGraduation": "2025"
    },
    "-NuUPLdWK-kx4d9ZcAiT": {
      "branchOfStudy": "Mining engineering ",
      "collegeName": "Aditya University ",
      "email": "vinodrssv@gmail.com",
      "fullname": "Chintha Vinod kumar reddy ",
      "phone": "9515490249",
      "transactionId": "T2404022054052176979301",
      "yearOfGraduation": "2026"
    },
    "-NuURNpDK4gJrksRvC19": {
      "branchOfStudy": "Mining engineering ",
      "collegeName": "Aditya engineering College ",
      "email": "vishnuayila15@gmail.com",
      "fullname": "Alva vishnu",
      "phone": "8341371529",
      "transactionId": "T2404022054052176979301",
      "yearOfGraduation": "2026"
    },
    "-NuXeawYZIt3GG37ly35": {
      "branchOfStudy": "Mining",
      "collegeName": "Centurion University of technology and management ",
      "email": "sunnysahu2100@gmail.com",
      "fullname": "Sunny sahu",
      "phone": "7389062100",
      "transactionId": "T2404031203551594284738",
      "yearOfGraduation": "2022"
    },
    "-NuXgu_J5sKd4N-s3Fa1": {
      "branchOfStudy": "Mining engineering ",
      "collegeName": "Centurion University of technology and management ",
      "email": "230301190007@centurionuniv.edu.in",
      "fullname": "ABHIMANYU SINGH ",
      "phone": "89176 5124",
      "transactionId": "T2404031213548988482063",
      "yearOfGraduation": "1"
    },
    "-NuXgvDMIQ5BySQY_7_J": {
      "branchOfStudy": "Mining engineering ",
      "collegeName": "Centurion University of technology and management ",
      "email": "230301190007@centurionuniv.edu.in",
      "fullname": "ABHIMANYU SINGH ",
      "phone": "89176 5124",
      "transactionId": "T2404031213548988482063",
      "yearOfGraduation": "1"
    },
    "-NuXhIRSZgxg5AondT3J": {
      "branchOfStudy": "B tech (mining)",
      "collegeName": "Centurion University ",
      "email": "220301190004@cutm.ac.in",
      "fullname": "Joydeep Maji",
      "phone": "9932934257",
      "transactionId": "T2404031214592891974605",
      "yearOfGraduation": "2"
    },
    "-NuXketJVvxtVN7GWPCP": {
      "branchOfStudy": "Mining ",
      "collegeName": "Centurion University ",
      "email": "230301190006@centurionuniv.edu.in",
      "fullname": "Sudhansu Khilar ",
      "phone": "9668477147",
      "transactionId": "T2404031230063788357367",
      "yearOfGraduation": "1"
    },
    "-NuXl-tKufN3addUwbDd": {
      "branchOfStudy": "Mining",
      "collegeName": "Centurian University Bhubaneswar ",
      "email": "230301190005@centurionuniv.edu.in",
      "fullname": "Soumya brata pradhan ",
      "phone": "6372428200",
      "transactionId": "T2404031231405287377450",
      "yearOfGraduation": "1"
    },
    "-NuXlTg8964aKvIFpJpi": {
      "branchOfStudy": "Mining",
      "collegeName": "Centurian University Bhubaneswar ",
      "email": "230301190005@centurionuniv.edu.in",
      "fullname": "Soumya brata pradhan ",
      "phone": "6372428200",
      "transactionId": "T2404031231405287377450",
      "yearOfGraduation": "1"
    },
    "-NuXlzDUwQAtxKEdjOd-": {
      "branchOfStudy": "Mining ",
      "collegeName": "Centurion University of technology and management, Bhubaneswar ",
      "email": "230301190001@centurionuniv.edu.in",
      "fullname": "Abhiman Sahani ",
      "phone": "8018189080",
      "transactionId": "T2404031235494026613408",
      "yearOfGraduation": "1"
    },
    "-NuXmBl9zdUHT8zNNl36": {
      "branchOfStudy": "BTech (mining)",
      "collegeName": "Centurion University ",
      "email": "220301120032@cutm.ac.in",
      "fullname": "Harishankar sahu",
      "phone": "8260689471",
      "transactionId": "409481737122",
      "yearOfGraduation": "2"
    },
    "-NuXmKiN_MvoLLvFRMEs": {
      "branchOfStudy": "Mining",
      "collegeName": "Centurian University Bhubaneswar ",
      "email": "230301190005@centurionuniv.edu.in",
      "fullname": "Soumya brata pradhan ",
      "phone": "6372428200",
      "transactionId": "T2404031231405287377450",
      "yearOfGraduation": "1"
    },
    "-NuXmM985kfUiMlqBw3b": {
      "branchOfStudy": "Btech(mining) ",
      "collegeName": "Centurion university of technology and management",
      "email": "220301190003@cutm.ac.in",
      "fullname": "Sourav Kumar Mahanta",
      "phone": "8260550120",
      "transactionId": "T2404031237356245877661",
      "yearOfGraduation": "2"
    },
    "-NuXmWHj3u2pAUSJs-pE": {
      "branchOfStudy": "Mining",
      "collegeName": "Centurian University Bhubaneswar ",
      "email": "230301190005@centurionuniv.edu.in",
      "fullname": "Soumya brata pradhan ",
      "phone": "6372428200",
      "transactionId": "T2404031231405287377450",
      "yearOfGraduation": "1"
    },
    "-NuXsdMhW9S8KQPXW_ah": {
      "branchOfStudy": "Btech_Mining",
      "collegeName": "Centurion University of Technology and Manageent",
      "email": "230301190009@centurionuniv.edu.in",
      "fullname": "Mihir Kisku",
      "phone": "9546532092",
      "transactionId": "T2404031239078737312943",
      "yearOfGraduation": "1"
    },
    "-NuXxcQ0J19RQn1W7VIs": {
      "branchOfStudy": "Mining",
      "collegeName": "IIT, Kharagpur",
      "email": "rayushkgp@gmail.com",
      "fullname": "Ayush Raj",
      "phone": "8407884035",
      "transactionId": "T2404031326528330082314",
      "yearOfGraduation": "2026"
    },
    "-NuY-8QjsyJ-h4tP0Ylo": {
      "branchOfStudy": "Mining Engineering",
      "collegeName": "IIT KHARAGPUR",
      "email": "prasanjeetkumar3013@gmail.com",
      "fullname": "Prasanjeet Kumar",
      "phone": "9508282593",
      "transactionId": "T2404031337162284259515",
      "yearOfGraduation": "2025"
    },
    "-NuY1023_01Ed-fm-QEW": {
      "branchOfStudy": "Mining engineering ",
      "collegeName": "IIT Kharagpur ",
      "email": "shubh.nyn4u@gmail.com",
      "fullname": "Shubham Nayan",
      "phone": "7282927771",
      "transactionId": "T2404031345424553831685",
      "yearOfGraduation": "2026"
    },
    "-NuY7h5tBPIoPgbLotKi": {
      "branchOfStudy": "MINING",
      "collegeName": "IIT Kharagpur",
      "email": "subhamsarkar0809@gmail.com",
      "fullname": "Subham Sarkar",
      "phone": "8482039158",
      "transactionId": "T2404031411297476340581",
      "yearOfGraduation": "2026"
    },
    "-NuYmtxWUDV6JldbI_-v": {
      "branchOfStudy": "Mining ",
      "collegeName": "Government college of engineering keonjhar ",
      "email": "suhanipanda14@gmail.com",
      "fullname": "Suhani priyadarshini panda ",
      "phone": "7978772155",
      "transactionId": "7978772155@ibl",
      "yearOfGraduation": "2025"
    },
    "-NuYq2aFtlB3K9o-ZliZ": {
      "branchOfStudy": "Mining engineering ",
      "collegeName": "Government college of engineering, Keonjhar ",
      "email": "hiteshrout264@gmail.com",
      "fullname": "Hitesh Kumar Rout ",
      "phone": "7682833681",
      "transactionId": "T2404031733354821017148",
      "yearOfGraduation": "3"
    },
    "-NuYsioObKXWI10c_9oe": {
      "branchOfStudy": "Mining",
      "collegeName": "Government College of Engineering, Keonjhar ",
      "email": "diptisikha790@gmail.com",
      "fullname": "Diptisikha Das ",
      "phone": "7849079177",
      "transactionId": "T2404031744522398399869",
      "yearOfGraduation": "3"
    },
    "-NuYtQIii-pgQvtLxoMf": {
      "branchOfStudy": "Mining ",
      "collegeName": "Government college of engineering keonjhar ",
      "email": "suhanipanda14@gmail.com",
      "fullname": "Suhani priyadarshini panda ",
      "phone": "7978772155",
      "transactionId": "T2404031748197722173005",
      "yearOfGraduation": "2025"
    },
    "-NuZIRPjD_H-JfY-m8k4": {
      "branchOfStudy": "Aiml",
      "collegeName": "Aditya University ",
      "email": "akhilbathi106@gmail.com",
      "fullname": "SAI AKHIL KUMAR BATHI",
      "phone": "8688235682",
      "transactionId": "446067901089",
      "yearOfGraduation": "2026"
    },
    "-NuZIS9xeWsJHGLQS3XB": {
      "branchOfStudy": "Aiml",
      "collegeName": "Aditya University ",
      "email": "akhilbathi106@gmail.com",
      "fullname": "SAI AKHIL KUMAR BATHI",
      "phone": "8688235682",
      "transactionId": "446067901089",
      "yearOfGraduation": "2026"
    },
    "-NuZIhX_HTBDDBqvE9VR": {
      "branchOfStudy": "AIML",
      "collegeName": "Aditya engineering College ",
      "email": "tejakattula555@gmail.com",
      "fullname": "K.TEJA",
      "phone": "9128495969",
      "transactionId": "409400938642",
      "yearOfGraduation": "2026"
    }
  }}

const dataRows = Object.keys(data.Registration).map((key, index) => {
    // console.log(key, index, data.Registration[key])
    // console.log(Object.values(data.Registration[key])[0])
    return {
        id: index + 1,
        branchOfStudy: Object.values(data.Registration[key])[0],
        collegeName: Object.values(data.Registration[key])[1],
        email: Object.values(data.Registration[key])[2],
        fullname: Object.values(data.Registration[key])[3],
        phone: Object.values(data.Registration[key])[4],
        transactionId: Object.values(data.Registration[key])[5],
        yearOfGraduation: Object.values(data.Registration[key])[6],
    };
    }
);

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "branchOfStudy", headerName: "Branch of Study", width: 200 },
  { field: "collegeName", headerName: "College Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "fullname", headerName: "Full Name", width: 200 },
  { field: "phone", headerName: "Phone", width: 200 },
  { field: "transactionId", headerName: "Transaction ID", width: 200 },
  { field: "yearOfGraduation", headerName: "Year of Graduation", width: 200 },
];

const Grid = () => {
  console.log(dataRows);
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <DataGrid
        rows={dataRows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
};

export default Grid;
