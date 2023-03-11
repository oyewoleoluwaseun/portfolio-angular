import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects: any = [
    {
      id: 1,
      title: `Lawyers' Guide `,
      desc: 'An App to assist Practicing Lawyers, Law School Students and Undergraduate Law Students have easy access to Legal Resources.',
      livedemo: '',
      projecturl: 'https://play.google.com/store/apps/details?id=com.pinnacle.lawyersguide',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/z1.png',
      tech: 'Android Studio , Java'
    },

    {
      id: 2,
      title: 'Nigeria Penal Code Act',
      desc: 'A highly accessible, easy to use app version of the Nigeria Penal Code Act.',
      livedemo: '',
      projecturl: 'https://play.google.com/store/apps/details?id=com.lumosstudio.penalcodeact',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/z26.png',
      tech: 'Android Studio , Java'
    },


    {
      id: 3,
      title: 'Electoral Act 2022',
      desc: 'A highly accessible, easy to use app version of the Nigerian Electoral Act, 2022',
      livedemo: '',
      projecturl: 'https://play.google.com/store/apps/details?id=com.lumosstudio.electoralact2022',
      mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/z27.png',
      tech: 'Android Studio , Java'
    },

    {
      id: 4,
      title: 'The Adventures of Moremi (Still in development)',
      desc: 'The Adventures of Moremi is a 2D action platformer game that includes the juice of pixel art style with precise touch controls, fluid movement, and smooth animation. Explore vast levels filled with secrets, quests and loot. Defeat tough bosses. Moremi is a young and brave Woman who fight for justice form her home town no matter what the cost. Help her on her adventure to stand against darkness and bring back the peace and serenity that once was.',
      livedemo: '',
      projecturl: '',
      mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/z23.png',
      tech: 'Godot Game Endine , GDScript'
    },


    {
      id: 5,
      title: 'Restaurant Angular App',
      desc: `A single-page web application, created during a Cousera course by Hong Kong University of Science and Technology, for a restaurant called confusion that aims to show restaurant's avaliable dishes and make users able to favorite and comment them. The application is built on the MEAN Stack of technologies and using RESTful web services architecture.`,
      livedemo: '',
      projecturl: 'https://github.com/oyewoleoluwaseun/Front-End-JavaScript-Frameworks-Angular',
      mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      imgUrl: 'assets/images/z4.png',
      tech: 'Angular, Bootstrap, TypeScript'
    },



    // {
    //   id: 6,
    //   title: 'News App using ReactJS (Parsing XML to JSON)',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
    //   githurl: 'https://github.com/mehulk05/NewsApp-using-React',
    //   mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
    //   imgUrl: 'assets/images/z24.png',
    //   tech: 'React JS, XMl to JSON'
    // },



    // {
    //   id: 7,
    //   title: 'Medium-Like Blog App Using Angular 9 and Firebase',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blog-Book/',
    //   githurl: 'https://github.com/mehulk05/Blog-Book',
    //   mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
    //   imgUrl: 'assets/images/z21.png',
    //   tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    // },



    // {
    //   id: 8,
    //   title: 'COVID 19 Tracker (Statistics) app Using Angularr',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/COVOID-19/',
    //   githurl: 'https://github.com/mehulk05/COVOID-19',
    //   mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
    //   imgUrl: 'assets/images/z2.png',
    //   tech: 'Angular 10 ,Bootstrap,Javascript'
    // },


    // {
    //   id: 9,
    //   title: 'Weather App with React',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/React-Weather/',
    //   githurl: 'https://github.com/mehulk05/React-Weather-App',
    //   mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
    //   imgUrl: 'assets/images/z9.png',
    //   tech: 'React, Open MAp Api'
    // },


    // {
    //   id: 10,
    //   title: 'Spring Boot + Angular 8 CRUD Example',
    //   desc: '',
    //   livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
    //   imgUrl: 'assets/images/z28.png',
    //   tech: 'Angular8, Java ,Hibernate'
    // },


    // {
    //   id: 11,
    //   title: 'Personal Portfolio Using Angular',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
    //   mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
    //   imgUrl: 'assets/images/z11.png',
    //   tech: 'Angular ,Bootstrap'
    // },


    // {
    //   id: 12,
    //   title: 'Personal Portfolio Using Django',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
    //   mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
    //   imgUrl: 'assets/images/z12.png',
    //   tech: 'Django'
    // },

    // {
    //   id: 13,
    //   title: 'Movie Success Prediction',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05',
    //   mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
    //   imgUrl: 'assets/images/z13.png',
    //   tech: 'Python, Machine Learning, Django Framework.'
    // },

    // {
    //   id: 14,
    //   title: 'Matrimonial Website',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
    //   mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
    //   imgUrl: 'assets/images/z14.png',
    //   tech: 'HTML, CSS, Bootstrap, Jquery'
    // },

  ]
  about2 = `Software & Game Developer with 2+ years of experience .
  Expertise in Angular 2+ All versions, Java, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Jquery, GDScript, Bootstrap, MongoDB, Firebase, and MYSQL`

  about = "I am a meticulous, dedicated and a proactive person who loves to explore new technologies and passionate about learning. An optimistic person who is always energetic and hungry in learning new skills with eagerness to succeed and enthusiasm to compete. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of Technology."
  resumeurl = "https://drive.google.com/file/d/1A7sxNqq9XvRnSxfFLPYIpzrRpgKNYfNU/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '80%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '75%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL, MYSQL, MONOGO, FIREBASE',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '65%'
    },
    {
      'id': '6',
      'skill': 'PYTHON, JAVA, GDSRIPT',
      'progress': '80%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'LawPavilion Business Solution',
      location: 'Lagos, Nigeria',
      timeline: 'Jan 2021 to Present',
      role: 'Angular Developer',
      work: `Design and implement visually aesthetic user interfaces .
      Identify issues with front end code and rectify them to remove bugs . 
      Create unit tests to ensure code is functioning as expected .
      Ensure front end code is able to query APIs`

    },
    {
      id: 3,
      company: 'Lumos Studio Integrated Ltd',
      location: '',
      timeline: 'Co-founder',
      role: 'Software & Game Developer',
      work: `Technologies : Java , Android Studio , Godot Game Engine .
      Worked on mobile applications built in Android Studio for different business and Campaigns .
      Developed video game using Godot Game Engine`
    },
    //   {
    //     id: 2,
    //     company: 'Growth99',
    //     location: 'Remote',
    //     timeline: '',
    //     role: 'Frontend  Developer',
    //     work: `Technologies : Angular , Node JS , MongoDB .
    // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
    // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
    // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
    // `
    //   },

    //   {
    //     id: 1,
    //     company: 'Tata Consultancy Services',
    //     location: 'Gandhinagar and Pune',
    //     timeline: 'June 2019 - Jan 2021',
    //     role: 'Assistant System Engineer Trainee',
    //     work: `Technologies : Angular , JavaSpring Boot , SQL. Apache Solr .

    // Project 1 : Worked on uploading two excel sheets with bulk of data and finding the matches for each business .

    // Project 2 : Worked on indexing the search results inside the application with bulk of data using Apache Solr and configuring the server with cron jobs and shell scripts .

    // Worked on ranking the search results based on various criteria,features and delivering the accurate results based on generated scores.
    // `
    //   },


  ]

  extraCircularInfo: any = [
    // {
    //   id: 1,
    //   title: 'Blogger',
    //   description: '',
    //   img: 'assets/images/Mehul Kothari – Medium1.png',
    //   url: 'https://mehulkothari05.medium.com/'
    // },
    {
      id: 1,
      title: 'Github',
      description: '',
      img: 'assets/images/github-oyewoleoluwaseun.png',
      url: 'https://github.com/oyewoleoluwaseun'
    },
    // {
    //   id: 1,
    //   title: 'Freelancing',
    //   description: '',
    //   img: 'assets/images/mehul_freelancing.png',
    //   url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    // },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
