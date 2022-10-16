export const eventData =[
    {type:"Technical",
    info:[
       /*-------------SKY DIVE----------------- */
      {
        name: "SKY DIVE",  
        day: "2",                       
        time: "6:30 pm",
        venue: "Netravati Auditorium",
        date:"12th Nov",
        image: "/events/technical/SkyDive.webp",  
        subtype: "team",
        mode: "online",
        maxlimit: '10',
        fee: 2500,
        faqUpdate: "FAQ Added!",

        prize:"₹75,000",
        registrations:["On spot registration is not available for this event",
                        "Registeration fee: ₹2,500 per team"
        ],
        teamReq:[
            "There are no specific requirements for the team or the team members."
        ],
        desc:
          "Team Challengers of Sahyadri College of Engineering and Management, Mangalore invites all university students to participate in Aerophilia ‘22. The contest will provide a real-world aircraft design experience for engineering students by allowing them to validate their analytical skills.Student teams will design, fabricate, and demonstrate the flight capabilities of an unmanned, electric-powered, radio-controlled aircraft that can best meet the specified mission profile. The goal is a balanced design possessing good demonstrated flight handling qualities, and practical and affordable manufacturing requirements.",
        smallDesc:"Get ready to design and demonstrate the capabilities of your aircraft.",
        format:{
            "Mission Sequnce :":[
                "Aircraft must be capable of performing all required missions.",
                "The Missions must be flown in order.",
                "A new mission cannot be flown until the team has obtained a successful score for the preceding mission.",
                "The aircraft must be flown in the same configuration for all three missions, including all structure and deployment mechanisms required for any or all missions. For example, if any pod is carried under the wing, then that pod must be flown in all three missions.",
                "The aircraft must complete a successful landing at the end of each mission. If the aircraft takes any serious damage during the landing, it would be considered a crash landing."
            ],
            "Mission 1 :":[
                "There is no payload for Mission 1.",
                "The pilot is allowed to move anywhere in the arena during Mission 1.",
                "Teams must complete 2 laps within the flight window.",
                "There will be a 5-minute flight window for this mission.",
                "Time starts when the aircraft throttle is advanced in the first attempt.",
                "Teams must complete a successful landing to obtain a score and successfully complete mission 1.",
                "Scoring:M1= 1.0 for successful mission."
            ],
            "Mission 2 :":[
                "Internal payload has to be carried.",
                "The airplane must manoeuvre through a series of hoops.",
                "The pilot is not allowed to move around and must stay in a fixed spot in the arena.",
                "A time window of 5 minutes will be provided, during which the teams can complete any number of laps of the set course.",
                "The scoring will take place depending on the number of laps completed.",
                "In mission 2, a lap will be considered successful only when the airplane passes through all the hoops in the given chronological order.In mission 2, a lap will be considered successful only when the airplane passes through all the hoops in the given chronological order.",
                "Teams must complete a successful landing to obtain a score and successfully complete mission 2.",
                "Scoring: M2= 1.0 * number_of_Successful_laps"
            ],
            "Mission 3 :":[
                "Both the payloads (External and Internal) must be carried at the same time.",
                "The pilot is not allowed to move around and must stay on a fixed spot in the arena.",
                "The airplane must dive from the top of the target and release the external payload aiming at the target.",
                "Deployment of the external payload is mandatory.",
                "The mission would be considered successful even if the teams fail to successfully hit the target area. But the team will lose points for the same.",
                "The mission’s score would be a function of the following factors: Pitch angle of the airplane during the dive. (best_dive_angle), The duration of the airplane stayed below 30 degrees during the dive. (dive_duration), The time taken (in seconds) to land after the payload hits the ground.(time_taken_to_land_after_hit)",
                "The dive angle (best_dive_angle) will be defined by the value closest to the ground normal, which the aircraft manages to maintain during its dive for more than 4 seconds.",
                "Scoring: If the target is hits: M3= (dive_duration) * (best_dive_angle) / (time_taken_to_land_after_hit). If the target is missed: M3= [(dive_duration) * (best_dive_angle) / (time_taken_to_land_after_hit)] * 0.5"
            ]
        }
        , 
        rules: [
          "The maximum wingspan allowed is 1.4 meters.",
          "The airplane must have a specific bay area for housing the internal payload.",
          "The internal payload must be secured in such a way that it must not be able to move and should stay perfectly in place.",
          "The Internal payload must be placed only in the given orientation, as mentioned in the Mission and Vehicle Design section of the problem statement.",
          "If it is found that the airplane is not able to secure the internal payload as mentioned above, then the team will be disqualified.",
          "The external payload must be housed outside the aircraft only, and the airplane must have a release mechanism for the same, to release it during mission 3.",
          "If it is found that the airplane is not able to secure the external payload in a manner which is not convincing enough for the organizers, then the team will be disqualified for human safety purposes.",
          "All vehicles will undergo a technical inspection by a designated contest tech inspector before being allowed to make any competition flight. All the decisions taken by the Tech inspector will be considered final.",
          "All material contained within all design reports must be the original work of the teams or appropriately cited in the bibliography section of the report. Any material that is found to be uncited and nonoriginal work will be subject to a penalty. Based on the severity, penalties can include points deducted from the report score up to a 100% reduction or full disqualification.",
          "A detailed format of the design report is provided in the rulebook",
          "Each team must email an electronic copy of their design report as outlined below to submission@aerophilia.in",
          "A detailed format of the submission requirement is provided in the rulebook."
         
        ],
    
        judgingCriteria: [
          "Reports will be scored on a 50-point basis following the guidelines outlined below.",
           "The design report must include the following: Executive Summary (5 points),Management Summary (5 points, Conceptual Design Approach (10 points), Preliminary Design (10 points), Detail Design (10 points), Manufacturing Plan (5 points), Bibliography (5 points)",
           "Each team's overall score will be computed from their Design Report Score and Total Mission Score using the following formula:SCORE = Design Report Score * Total Mission Score where Total misssion score= M1+M2+M3"
          ],
    
        contactDetails: [
          {
            name: "Nehal Hosalikar",
            phoneNumber: "+91 7829830846",
            
          },
          {
            name: "Varun Raj ",
            phoneNumber: "+91 9731527524",
            faq: "FAQ Updated",
            faqDetail: "Please find the same at the end of the Rulebook."
          }
        ],
        link:"https://drive.google.com/file/d/1cu-DQXNuCwKfuJsVz9sHPnTnnaVQmJRD/view?usp=sharing"
      },
      /*----WATER ROCKET------ */
      {
        name: "WATER ROCKET",  
        day: "3",                       
        time: "6:30 PM",
        venue: "Netravati Auditorium",
        date:"13th Nov",
        image: "/events/technical/WaterRocket.webp",  
        subtype: "team",
        mode: "online",
        maxlimit: '4',
        fee: 300,

        prize:"₹5,000",
        registrations:[
                        "Spot registerations are available.",
                        "Registeration fee: ₹300 per team."
        ],
        teamReq:[
            "Each team should consist of a maximum of 4 members.",
            "The team members should be from the same institution.",
        ],
        desc:
          "Get a feel for what it's like to launch a rocket using nothing but only compressed water. What are water rockets? Well, it's in the name. Now, do not take it for a mere task, for it is easy to build one, but really hard to make the most efficient water rocket that can win you the prize. How hard could that be? It isn't some rocket science, or is it? Well why don't you give it a try and find out. ",
        smallDesc:"Launch a rocket using nothing but \"The Elixer of Life\" ! ",
        format:{
            "Round-1  How Far? :":[
                "In this round the teams must launch the rockets and try to obtain the maximum score.",
                "The score will be calculated using the formula given :Round 1 score = (Max horizontal distance covered) * (time of flight)"
            ],
            "Round-2 - Hit the target :":[
                "In this round, the rocket launched should hit an area marked at a distance of 65m.",
                "The target area will be in circular shape with three regions.",
                "Innermost region of diameter 10 m (30 points).",
                "Middle region of diameter 15m (20points). ",
                "Outermost region of diameter 20m (10 point)."
            ]
        }
        , 
        rules: [
          "Water rockets can have multiple stages. Parachute, gliding and other mechanical launching mechanisms are allowed. Booster mechanisms can be used. ",
          "Use of Electronic components and other chemical components is restricted. ",
          "No usage of fire or explosives is allowed.",
          "Launchpads should be brought by the teams only, as they will not be provided on the event day.",
          "The volume of the rocket must be less than or equal to 2.5 liters.",
          "The working fluid must be water. ",
          "All decisions about scoring, gameplay, and timing made by the coordinators and judges are final.",
          "All the decisions taken by the judges or the volunteers will be considered and no argument will be allowed.",
          "Teams failing to abide by the rules will lead to disqualification. "
          
        ],
    
        judgingCriteria: "",
    
        contactDetails: [
          {
            name: "Dion D'Souza",
            phoneNumber: "+91 7975573950",
          
          },
          {
            name: "Gurucharan Nayak K ",
            phoneNumber: "+91 8590321676",
           
          }
        ],
        link:"https://drive.google.com/file/d/1AwOIRUxmRXMJdOo3TZy1YGk2YJPbLTP8/view?usp=sharing"
      },
      /*-----------TUG OF BOTS---------------- */
      {
        name: "TUG OF BOTS",  
        day: "2",                       
        time: "6:30 pm",
        venue: "Netravati Auditorium",
        date:"12th Nov",
        image: "/events/technical/TugofBots.webp",  
        subtype: "team",
        mode: "online",
        maxlimit: '5',
        fee: 400,

        prize:"₹5,000",
        registrations:[
                        "Spot registerations are available.",
                        "Registeration fee: ₹400 per team."
        ],
        teamReq:[
            "All the team members must be full-time students at an accredited University/College/School.",
            "There are no restrictions on the number of teams from the same Institute.",
            "The team can contain upto 5 members in total."
        ],
        desc:
          "Two different bots from each team will compete against each other on a certain arena to pull the opposition team to their side. As soon as the red mark on the rope crosses the median line, the team to pull rope to their area wins the game.",
        smallDesc:" Make the BOT pull the hardest. Simple!",
        format:{
            "Bot Specification :":[
                "The weight of the robot should not exceed the limit of 4Kg. ",
                "The dimensions of the bot an be as follows:  width: 30cm   length: 30cm   height: 30cm.",
                "A pardon of tolerance in the amounts of 10% will be given in the case of the dimensions and weight.",
                "Any discrepancy in the dimensions will lead to the team disqualification.",
                "The bot cannot be made using ready to assemble kits.",
                "The bot must contain a structure similar to a hook for securing the rope."
            ],
            "Arena Specification :":[
                "The dimension of arena will be 4*3feet.",
                "The map is given in the rulebook."
            ],
            "Session Details :":[
                "There will be three sessions, PRELIMINARY, SEMIFINAL and FINAL.",
                "The winners of each session will advance onto the next."
            ]
        }
        , 
        rules: [
          "Each session will comprise two rounds.",
          "The position of the two competitors' bots will be interchanged after one round.",
          "The team which pulls the other bot over the line will advance into the next session.",
          "The bot can only be controlled by one person on the team.",
          "The judges’ verdict should be considered final and no arguments will be entertained."
        ],
    
        judgingCriteria: "",
    
        contactDetails: [
          {
            name: "Rakshith K ",
            phoneNumber: "+91 7306231899",
          
          },
          {
            name: "Sheshadri S ",
            phoneNumber: "+91 7019031534",
           
          }
        ],
        link:"https://drive.google.com/file/d/1GD3WJ5zdLCg5aBXrfFjMbSCq2lX-5HTH/view?usp=sharing"
      },
      /*------BOT SUMO----- */
      {
        name: "BOT SUMO",  
        day: "3",                       
        time: "6:30 pm",
        venue: "Netravati Auditorium",
        date:"13th Nov",
        image: "/events/technical/BotSumo.webp",  
        subtype: "team",
        mode: "online",
        maxlimit: '3',
        fee: 400,

        prize:"₹5,000",
        registrations:[
                        "Spot registerations are available.",
                        "Registeration fee: ₹400 per team."
        ],
        teamReq:[
            "Each team should consist of a maximum of 3 members.",
            "The team members can be from the same or different institutions.",
            "Multiple teams from the same institution can compete."
        ],
        desc:
          "The competition will involve two limited sized contesting Sumo bots which will compete within a circular arena. The purpose of the competition will be for one robot to eliminate the other by means of pushing it out of the arena within the time limit.",
        smallDesc:"Make the BOT fight for its life. Simple!",
        format:{
            "Bot Specification :":[
                "The weight of the robot should not exceed the limit of 5 Kg. ",
                "The dimensions of the bot should not exceed the limit: Width: 30 cm, Length: 30 cm, Height: 30 cm.",
                "A pardon of tolerance in the amounts of 10% will be given in the case of the dimensions and weight.",
                "Any discrepancy in the dimensions will lead to the team disqualification.",
                "The bot cannot be made using ready to assemble kits.",
                "Bots can be wired or wireless."
            ],
            "Arena Specification :":[
                "The diameter of the arena will be 3 meters.",
                "The type of arena provided will be: Plane Surface",
                "The arena map is given in the rulebook."
            ],
        }
        , 
        rules: [
          "There will be three sessions, PRELIMINARIES, SEMIFINAL and FINAL.",
          "The winner will be the bot left functioning in the arena.",
          "If a bot falls out of the arena after it has pushed its opponent is considered as out. (Note: No other method of attack is allowed other than pushing, if found will be disqualified).",
          "In case that both the bots are unable to eliminate each other over a period of 5 minutes, the bot which has successfully performed more attacks will be considered as the winner of the round.",
          "The bot can be controlled by only one person of the team.",
          "The winners of each session will advance onto the next.",
          "The judge's verdict should be considered final and no arguments will be entertained.",
        ],
    
        judgingCriteria: "",
    
        contactDetails: [
          {
            name: "Sheshadri S",
            phoneNumber: "+91 7019031534",
          },
          {
            name: "Rakshith K",
            phoneNumber: "+91 7306231899",
          }
        ],
        link:"https://drive.google.com/file/d/1sA7CImWRyhu6oemMPSkTGoufMT2Z8SM-/view?usp=sharing"
      },
      /* -----Paper Presentation------ */
      {
        name: "PAPER PRESENTATION",  
        day: "2",                       
        time: "6:30 PM",
        venue: "Netravati Auditorium",
        date:"12th Nov",
        image: "/events/technical/DroneRace.webp",  
        subtype: "team",
        mode: "online",
        maxlimit: '3',
        fee: 150,

        prize:"₹2,000",
        registrations:[
                        "Spot registerations are available.",
                        "Registeration fee: ₹150 per team.",
                        "The deadline for applying and submission is: 11th November,2022."
        ],
        teamReq:[
            "The contest is open for P.U.C, B.E/B.Tech and polytechnic level students.",
            "Team can be of maximum 3 members.",
            "A single participant cannot register in more than 1 team.",
            "There is no restriction on the number of teams from the same college."
        ],
        desc:
          "Paper presentation is a competition where Participant/s is/are expected to make a ppt about a topic and get their Research Paper and submit it to judges or host, then the delegate is given timeframe of 8 minutes where they can explain their research with help of videos or PowerPoint presentation or some infographics. Then there is a Q&A session of about 2 minutes where judges ask challenging questions or clarification of certain topics. And at the end of the conference Excellent paper awards are declared.",
        smallDesc:"Show off your presenting skills to the jury members!",
        format:{
            "Topic :":[
                "Any topic in ‘Latest technologies’ may be taken up for presentation i.e, to be given in front of juries. Students can give an explanation for their research with assistance of videos or PowerPoint presentations or some infographics.",
               
            ],
            "Procedure :":[
              "Paper should be mailed to us beforehand, and a hard copy must be brought and submitted to the judges before presentation.",
              "The paper should be in IEEE format.",
              "Paper Format Rules is given in the rulebook.",
              "The paper must be emailed(submission@aerophilia.in) along with these details: Name of the candidates, Department/Year of study, College name and address,Contact Number and Email ID."
            ]
        }
        , 
        rules: [
          "Presentation duration - 10 mins. (8 min - presentation, 2 min - Q&A).",
          "Participants should present their ideas in the given time.",
          "The presentation should be in the form of Microsoft PowerPoint only.",
          "Number of slides should not exceed 15.",
          "Participants are requested to have a copy of their presentation in their mail.",
          "Participants are encouraged to bring their own laptops.",
        ],
    
        judgingCriteria: [
          "The submitted works will be strictly checked for plagiarism.",
          "The judgment will be based on specific criteria such as the authenticity of the idea, clarity of explanation, presentation skills, efforts of delegate, social impact etc.",
          "The decision of Judges will be final, and no arguments will be entertained."
        ],
    
        contactDetails: [
          {
            name: "Manya Shetty",
            phoneNumber: "+91 7020746170",
          },
          {
            name: "Sonia K",
            phoneNumber: "+91 7406243349",
          }
        ],
        link:"https://drive.google.com/file/d/1Z-2o5blAY7VtgJUAShpeT4CH6Pwq7MlI/view?usp=sharing"
      },

        /* -----MAN VS BUG ------ */
      {
        name: "MAN vs BUG",  
        day: "1",                       
        time: "6:30 PM",
        venue: "Netravati Auditorium",
        date:"11th Nov",
        image: "/events/technical/CodingContest.webp",  
        subtype: "team",
        mode: "online",
        maxlimit: '2',
        fee: 300,

        prize:"₹7,000",
        registrations:[
                        "Spot registerations are available.",
                        "Registeration fee: ₹300 per team.",
                       
        ],
        teamReq:[
            "Team of two members from school or college.",
            "Team members must be of the same school or college.",
            "Participants should get their school/college ID card",
            "Any number of teams from a school/college is allowed."
        ],
        desc:
          "Hello coders! Do you want to play a game that interests you? Then this is the perfect destination for you as you will be competing against the best coders around you. So are you ready to be crowned as the best coder? ",
        smallDesc:"Ultimate Coding Competition!",
        format:{
            "Round 1 THE PRELIMINARY TEST:":[
                "Teams will be given a set of programming MCQs that they must answer within a given time duration.",
                "The top 15 Teams scoring the highest will qualify for the next round.",
                "In case of a tie, there will be tie-breaker questions.",
                "Communication with any other team is prohibited."
            ],
            "Round 2 FIX–IT:":[
              "The Teams are provided with the program or snippets of it, which contains bugs or error messages.",
              "Teams must debug the program and obtain the desired output.",
              "The top 5 teams with the highest number of questions debugged will qualify.",
              "A maximum of 30 minutes is given to each team for fixing the bugs and errors."
            ],
            "Round 3 BID BATTLE":[
              " Each team will be provided with certain points, and at a time one question will be displayed to all the Teams, each team should bid for all the questions with the respective points.",
              "The team that solves the question first will be rewarded with all the points bet by that team and also the points bet by other teams for the same question.",
              "The team to finish second will get 50% of what the first Team gets.",
              "A team must compulsorily bet on all questions.",
              "Teams cannot change once they bet on one question."
            ]
        }
        , 
        rules: [
          "Usage of cell phones or any other electronic devices (Other than the ones provided by the organizers) is prohibited.",
          "Communication with any other team during the event is prohibited.",
          "The Organizer's decision will be final.",
        ],
    
        judgingCriteria: [
          "Top performers in the particular round will qualify for the next round.",
          "In the final round, the team with the maximum points will be declared the winner.",
        ],
    
        contactDetails: [
          {
            name: "Prajwal P",
            phoneNumber: "+91 9480382738",
          },
          {
            name: "Neha V",
            phoneNumber: "+91 9535999994",
          }
        ],
        link:"https://drive.google.com/file/d/1EajUjzX0GWaeojDNE6AGMkaghxuIKkDP/view?usp=sharing"
      },
      /* -------LINE FOLLOWER----------- */
      {
        name: "LINE FOLLOWER",  
        day: "3",                       
        time: "6:30 PM",
        venue: "Netravati Auditorium",
        date:"13th Nov",
        image: "/events/technical/LineFollower.webp",  
        subtype: "team",
        mode: "online",
        maxlimit: '5',
        fee: 400,

        prize:"₹5,000",
        registrations:[
                        "Spot registerations are available.",
                        "Registeration fee: ₹400 per team.",
                       
        ],
        teamReq:[
            "All the team members must be full-time students at an accredited University/College/School.",
            "There are no restrictions on the number of teams from the same Institute.",
            "The team should contain 3-5 members in total.",
            
        ],
        desc:
          "A competition played by one or two teams at a time, with each team consisting of one Wireless Bot. Build a bot capable of racing on a track following the path of the arena in the shortest period of time.",

        smallDesc:"Make the BOT follow the line. Simple!",

        format:{
            "":[
                "The competition will consist of 2 rounds.",
                "Each round will have a different map which will be disclosed on the day of the event.",
                "Round specific rules will be explained just before the start of that particular round. ",
                "Round 1 will have black line/trajectory on white arena.",
                "Winners of round 1 will qualify for round 2.",
                "Round 2 will have colour inversion, refer to the sample arena given in the rulebook.",
                "30 minutes will be given before round 2 for uploading the required code for the inversion map."
            ],
           
        }
        , 
        rules: [
          "One robot cannot be shared by two or more teams, moreover the robot cannot be ready-made.",
          "No test/practice will be allowed in the 1st round. ",
          "Once a robot has crossed the start line it must remain fully autonomous, else the team will be disqualified.",
          "The width of the trajectory of the arena is approximately 3 cm.",
          "Participants should arrange their own batteries, and power supply must be on board.",
          "The robot must remain intact until results are announced.",
          "The verdict of the judges is considered final and no arguments will be entertained."
        ],
    
        judgingCriteria:"",
    
        contactDetails: [
          {
            name: "Akshay Shet",
            phoneNumber: "+91 9449384765",
          },
          {
            name: "Vidhisha Shetty",
            phoneNumber: "+91 6362138356",
          }
        ],
        link:"https://drive.google.com/file/d/1YRjtqbilCy7aTej-UqNVVB-SULFgCWRL/view?usp=sharing"
      },
      /* ---  GREASE MONKEY -----*/
      {
        name: "GREASE MONKEY",  
        day: "2",                       
        time: "6:30 PM",
        venue: "Netravati Auditorium",
        date:"12th Nov",
        image: "/events/technical/EngineOverhaul.webp",  
        subtype: "team",
        mode: "online",
        maxlimit: '3',
        fee: 300,

        prize:"₹5,000",
        registrations:[
                        "Spot registerations are available.",
                        "Registeration fee: ₹300 per team.",
                       
        ],
        teamReq:[
            "Each team should consist of a maximum of 3 members.",
            "The team members can be from the same or different institutions.",
            "Multiple teams from the same institution can compete.",
            
        ],
        desc:
          "For all the automobile enthusiasts out there, here's an event to test your knowledge, hands-on and troubleshooting skills. ",
        smallDesc:"Diagnose and Repair IC Engines",
        format:{
            "Round 1 Quiz:":[
                "Teams are required to answer 30 questions in 30 Minutes.",
            ],
            "Round 2 Questionnaire:":[
              "Set of questions will be asked to individual members of every qualified team.",
             
            ],
            "Round 3 Engine diagnosis:":[
              "The top 3 teams will be provided with a faulty Engine and are required to diagnose the issue. The team with the fastest time will be declared as the winner.",
              
            ]
        }
        , 
        rules: [
          "Teams are prohibited from using their phones during the conduction of the event. If any team found failing to do so will be eliminated immediately.",
          "Event organisers will provide all the required tools.",
          "The verdict of the judges is considered final and no arguments will be entertained."
        ],
    
        judgingCriteria: [
          "In round 1 and 2, teams will be awarded points based on the number of questions answered correctly.",
          "In round 3, teams will be awarded points based on the amount of time they take to clear the round successfully.",
        ],

        contactDetails: [
          {
            name: "Aheesh Rao",
            phoneNumber: "+91 9074698684",
          },
          {
            name: "Gurucharan Nayak K",
            phoneNumber: "+91 8590321676",
          }
        ],
        link:"https://drive.google.com/file/d/1qM4LFrqYzq4_SoSzzW2dJJczhwJCVAiy/view?usp=sharing"
      },
      /* ----- DRONE RACE---------*/
      {
        name: "LIFT OFF!",  
        day: "1",                       
        time: "6:30 PM",
        venue: "Netravati Auditorium",
        date:"11th Nov",
        image: "/events/technical/DroneRace.webp",  
        subtype: "team",
        mode: "online",
        maxlimit: '5',
        fee: 1000,

        prize:"₹30,000",
        registrations:[
                        "Spot registerations are available.",
                        "Registeration fee: ₹1,000 per team.",
                       
        ],
        teamReq:[
            "There are no specific requirements for the team or the team members."
            
        ],
        desc:
          "Drones race is a fast-paced game where you control a drone and try to reach the end of the race track as quickly as possible. The faster you are the more points you score, and the higher your score more difficult the track becomes.",
        smallDesc:"Get your drone racing gear and join us for the biggest drone race event of the year!",
        format:{
            "Drone Specification:":[
                "Frame size should be between 180 mm to 500 mm.",
                "Battery or power supply should not exceed 6s or 24V.",
                "Must be operated in Line of sight.",
                "The radio telemetry should be 900MHz to 2.4 GHz.",
                "Ready-made drones are not allowed.",
                "Carbon Fibre propellers are not allowed."
            ],
            "Terms and Conditions:":[
              "The event organizers reserve the right to stop the match at any point of time if they deem that the match is turning out to be dangerous.",
              "The contestants are requested to comply with the organizers in this regard, violation of which will lead to an immediate disqualification.",
              "Any changes in the rules will be notified to the participants via their registered emails.",
              "The decision of organizers will be final and binding on all. And the organizers hold all the right to change any or all rules, and conditions declared.",
              "The organizers are not responsible for any damage to the drones caused during the race."  
            ],
           
        }
        , 
        rules: [
          "The competition will have 3 round.",
          "First round will be an obstacle course, followed by a drag race. Third round is a special round announced during the event.",
          "No participants are allowed inside the arena.",
          "Trial/practice runs in the arena are not allowed.",
          "All teams are advised to keep a pair of charged batteries."
        ],
    
        judgingCriteria: [
          "Score calculation will be based on time, number of skill points and number of penalties.",
          
        ],

        contactDetails: [
          {
            name: "Sushan Shetty",
            phoneNumber: "+91 6360298756",
          },
          {
            name: "Pravardhan N Shetty",
            phoneNumber: "+91 9740605038",
          }
        ],
        link:"https://drive.google.com/file/d/1n1p9FvkPH4fu3jsm4KPUi-OFxgjFpsys/view?usp=sharing"
      },

      //---bot soccer-----
      {
        name: "BOT SOCCER",  
        day: "1",                       
        time: "6:30 PM",
        venue: "Netravati Auditorium",
        date:"11th Nov",
        image: "/events/technical/RoboSoccer.webp",  
        subtype: "team",
        mode: "online",
        maxlimit: '5',
        fee: 600,

        prize:"₹10,000",
        registrations:[
                        "Spot registerations are available.",
                        "Registeration fee: ₹600 per team.",
                       
        ],
        teamReq:[
            "The team can have a maximum of 5 members and a minimum of 3.",
            "All the team members must be full-time students at an accredited University/College/School.",
            "There are no restrictions on the number of teams from the same Institute.",
        ],
        desc:
          "Two different bots from each team will compete against each other in the arena on a pseudo soccer field to score goals and prevent the opponent from scoring a goal. ",
        smallDesc:"Make the BOT fight for the glory of Football. Simple!",
        format:{
            "Bot Specification:":[
                "The weight of the bot must not be more than 5 kg.",
                "The bot's measurements must be 30 cm in length and 30 cm in width. There will be a 10% tolerance allowance for both weight and size.",
                "Any contravene in the above-given specification will lead to disqualification.",
                "Wires must be long enough to reach the corners of the arena.",
                "Teams are not allowed to utilize ready-made bots like those made of Lego bricks.",
                "Maximum 12 volt power supply can be used."
            ],
            "Arena Specification:":[
              "The arena dimensions will be 10*6 feet.",
              "The arena will have walled boundaries.", 
            ],
           
        }
        , 
        rules: [
          "Each game shall have 2 halves, each half lasting for two minutes.",
          "Pushing the opponent’s bot into the goal post is allowed.",
          "Until the end of the two parts, the bot can only be controlled by one individual. Changes to the controller are not permitted.",
          "During the game, one player should grip the wires of the bot. Throughout the whole game, the wires should be flexible.",
          "A 60-second window will be given if the bot becomes immovable so that it may be fixed.",
          "Each minute they don't complete it, they lose 1 point.",
          "At any time throughout the game, the ball cannot be raised into the air.",
          "The responsible team will lose 2 points if the ball leaves the arena.",
          "No lifting mechanisms are allowed during the match."
        ],
    
        judgingCriteria: [
          "The team will receive 3 points for each goal.",
          "Intentional damage to the opponent's bot or the arena will result in a loss of one point.",
          "The coordinator's and judges' decisions on time, gameplay, and scoring are final.",
          "No arguments will be entertained; all choices made by the judges or volunteers will be taken into consideration."
        ],

        contactDetails: [
          {
            name: "Dion D'Souza",
            phoneNumber: "+91 7975573950",
          },
          {
            name: "Aheesh Rao",
            phoneNumber: "+91 8095815347",
          }
        ],
        link:"https://drive.google.com/file/d/1mH0EtO4bpb4AmEURM47OigIIeO5ob__P/view?usp=sharing"
      }
      ]
    },
  
    {type:"Cultural",
     info:[
      /*----FEEL the BEAT ----*/
      {
        name: "FEEL THE BEAT",  
        day: "2",                       
        time: "6:30 pm",
        venue: "Netravati Auditorium",
        date:"12th Nov",
        image: "/events/technical/DroneRace.webp",  
        subtype: "solo",
        mode: "online",
        maxlimit: '1',
        fee: 150,

        prize:"₹3,000",
        registrations:[
                        "Registeration fee: ₹150"
        ],
        teamReq:[
            "It is an Individual Event."
          ],
        desc:
          "There are some things that cannot be expressed through words, dance is a great way to express oneself. If you believe you can create that magic and ignite the audience, here is your chance!!!",
        smallDesc:"Express your thoughts without using words.",
        format:{
            "Round-1 - KNOCK OUT:":[
                "Participants have to submit a video of their solo performance.",
                "The use of props is strictly prohibited.",
                "The participants can select the song of their choice, however, music with foul/slang language is not permitted. ",
                "Contestants must submit their videos before the 9th of November 2022 at Email ID: submission@aerophilia.in",
                "Submission requirements:The naming format of the video should be as CollegeName_FullName_AccademicCourceWithYear."
            ],
            "Round-2 - PROPS CHALLENGE:":[
                "The candidates will be provided with props 10min prior to their turn.",
                "The duration of the round will be 3min.",
                "The participants can select the song of their choice, however, music with foul/slang language is not permitted.",
                "Performance would be judged based on their choreographic sequence using those props."
            ],
            "Round-3 - CHALLENGE MOVES:":[
                "This round is a one-to-one show.",
                "This round is purely to judge the spontaneity of the dancing moves in you.",
                "The selected two will have to be battling each other on a random dance number played by the jury.",
                "On every buzz, the performance switchover happens until the common buzz is turned on where both the candidates groove together."
            ]
        }
        , 
        rules: [
          "The judge's decision is the final decision.",
          "The soundtrack must be submitted to the event coordinator 10 min prior to the event.",
          "The participants are requested to bring a pen drive on the day of the event with their names clearly written on it to avoid uncertainty.",
          "The battle will be of 3 rounds and the winner of each round will move to the next stage of the tournament."
        ],
    
        judgingCriteria: [
          " First-round score + Second-round score + Final-round score",
          
        ],
    
        contactDetails: [
          {
            name: "Ananya Shetty",
            phoneNumber: "+91 7019737032",
            
          },
          {
            name: "Sagar G",
            phoneNumber: "+91 8095130096",
           
          }
        ],
        link:"https://drive.google.com/file/d/1kBfZO77Su0fvukPgvJ4i7kwiY0qWLC9k/view?usp=sharing"
      },
      /*------INTENSITY---------- */
      {
        name: "IN10SITY",  
        day: "1",                       
        time: "6:30 pm",
        venue: "Netravati Auditorium",
        date:"11th Nov",
        image: "/events/technical/DroneRace.webp",  
        subtype: "team",
        mode: "online",
        maxlimit: '1',
        fee: 1000,

        prize:"₹15,000",
        registrations:[
                        "Every team has to pay a registration fee of ₹100/- per head in order to register successfully."
        ],
        teamReq:[
            "Each team must have a minimum of 6 and a maximum of 15 participants, including the stage set-up team/coordinators.",
            "There cannot be multiple teams from the same institute(only one team from each institute).",
            "All the team members must be from the same institution."
          ],
        desc:
          "We invite the top dancers to compete in this Battle of the Dance, with the winner being the best. We invite vibrant, lively, and dynamic youngsters to spread their energy on stage. Dancers that have a bold competitive attitude are thus invited to join us.",

        smallDesc:"The ultimate Battle of the Dance is here.",
        format:{
            "Round-1:":[
                "Participants must send a video of their performance before 9th November at Email ID: submission@aerophilia.in",
                "The video must be 2-5 minutes long.",
                "Rename the recorded video as your group name along with your college name.",
                "Eg. Group 1_Sahyadri College of engineering and management.",
                "Mail the video to the aforementioned Email ID.",
                "NOTE: All the participants in the first round must also be present for the final round.",
                "NOTE: Scores of this round will be added along with the final round’s scores."
            ],
            "Round-2 - Final:":[
                "The time limit for each team is 15 minutes (Time limit includes entrance/exit and prop set-up).",
                "The participants must be ready at the venue at least 45 minutes prior to the commencement of the event.",
                "The time allocated for stage set-up is 3 minutes and for dance performance is 10+2 minutes.",
                "Teams must submit their soundtrack 1 hour prior to the event. It can be a Pendrive. For emergencies, it is advisable to have a duplicate Flash Drive available.",
                "The choice of songs is open to the participants.",
                "The dance performances can be in any dance style including folk, freestyle, Hip Hop, Jazz, Modern Dance, contemporary, traditional, Eastern, and classical.",
                "The usage of props and production materials is allowed. These have to be brought by the teams themselves."
            ]
          }
        , 
        rules: [
          "Absolutely No forms of liquids (including water), gels, aerosols, glitter, confetti, etc. which may affect the stage surface may be used during a routine.",
          "Negative points will be awarded on exceeding the time limit.",
          "Points may be deducted if a team contains more dancers than were registered.",
          "Obscenity and vulgarity in any form, in any event, will lead to instant disqualification. The decision lies with the organizers.",
          "In all matters related to judging, the judge's decision will be final and binding.",
          "Dance performance should not convey any indecent gestures.",
          "No dangerous props allowed. Dangerous props include knives, swords, anything thrown directly at the judge's table that may be harmful, and anything that could alter the surface of the dance floor.",
          "The event's Coordinators shall not be held responsible for any loss or damage to the props."
        ],
    
        judgingCriteria: [
          "First-round score + Final-round score.",
          "Costume.",
          "Presentation.",
          "Facial expressions."
          
        ],
    
        contactDetails: [
          {
            name: "Ananya Shetty",
            phoneNumber: "+91 7019737032",
            
          },
          {
            name: "Sagar G",
            phoneNumber: "+91 8095130096",
           
          }
        ],
        link:"https://drive.google.com/file/d/1dPcGqfTjXgIl-dIdVVt7am75HMP3BUG-/view?usp=sharing"
      },
        /*------ROCKING RIOT---------- */
      {
        name: " ROCKIN’ RIOT",  
        day: "2",                       
        time: "6:30 pm",
        venue: "Netravati Auditorium",
        date:"12th Nov",
        image: "/events/technical/BattleofBands.webp",  
        subtype: "team",
        mode: "online",
        maxlimit: '8',
        fee: 1000,

        prize:"₹20,000",
        registrations:["On spot registration is available",
                        "Every team has to pay a registration fee of ₹1,000/- per team in order to register successfully."
        ],
        teamReq:[
            "Each band crew must consist of a minimum of four and a maximum of eight people, including at least one vocalist."
          ],
        desc:
          "A competition where bands consisting of vocalists and instrumentalists battle against each other to showcase their musical talents. Come show us your thirst for music through your performances and stand a chance to win the ultimate showdown.",

        smallDesc:"Compete for the title of \"Best Band\"!",
        format:{
            "Round 1:":[
                "Participants must send a video of their performance before 10th November at EmailID: submission@aerophilia.in .",
                "YouTube links of live performances can also be sent.",
                "Rename the recorded video as your band name along with your college name.",
                "Eg. ABCD Band_Sahyadri College of engineering and management.",
                "Mail the video to the aforementioned Email ID.",
                "Pre-recorded videos and editing are not allowed."
            ],
            "Round 2 - Final:":[
                "Bands must bring their own instruments, gear, and accessories. Only the drum set will be provided (excluding kick pedals).",
                "Any damage to the drum kit will have to be borne by the team itself. In case any damage is found please inform us beforehand.",
                "A band member can only be a member of one band.",
                "All band members must arrive at least 30 minutes before the performance time to check in with the coordinator.",
                "Each team is given 5 minutes to set up and 15 minutes to perform. (Points will be deducted for exceeding time constraints.)",
                "Registration will be done only after the approval of the bands by the organizers.",
                "There are no genre restrictions. Rock, metal, and fusion are preferred.",
                "Bonus points are awarded for originality and musical complexity.",
                "Any vulgarity is not tolerated and will result in immediate disqualification.",
                "Extra time will be credited in the event of technical difficulties.",
                "The judges' decisions will be final in all circumstances."
            ]
          }
        , 
        rules:"",
    
        judgingCriteria: [
          " First-round score + Final-round score",
          " Planning / Preparedness - 20%",
          "Originality - 30%",
          "Interface with Audience - 10%",
          "Quality of Performance - 20%",
          "Presentation - 20%"
          
        ],
    
        contactDetails: [
          {
            name: "Sweedone Dsouza ",
            phoneNumber: "+91 9535925744",
            
          },
          {
            name: "Anup Pai",
            phoneNumber: "+91 9731189986",
           
          }
        ],
        link:"https://drive.google.com/file/d/1M6TrxplQujJ6sWkNKlJOEyW7nCqkItRn/view?usp=sharing"
      },
      /*----SING ON----- */
      {
        name: "SING ON",  
        day: "1",                       
        time: "6:30 pm",
        venue: "Netravati Auditorium",
        date:"11th Nov",
        image: "/events/technical/DroneRace.webp",  
        subtype: "solo",
        mode: "online",
        maxlimit: '7',
        fee: 150,
        
        prize:"₹3,000",
        registrations:[
                        "A registration fee of ₹150/- per head is to be payed in order to register successfully."
        ],
        teamReq:[
            "It is a solo singing competition."
          ],
        desc:
          "We all enjoy singing our favorite songs, but for a budding musician, it is much more than singing at a family gathering or while driving to work. Singing a song professionally or in front of an audience takes a lot more practice and hard work. If you believe you can create that magic and enthrall the audience, this is your chance",

        smallDesc:"Come and show off your talent for Western music.",
        format:""
        , 
        rules: [
          "Participants can use Karaoke tracks.",
          "Instruments can also be used but participants should get their own, participants will have 5 minutes to set up their instruments.",
          "Participants will not be allowed to refer to the lyrics while singing.",
          "The participants will be judged on the song selection, voice quality, clarity, rhythm, and appeal to the audience.",
          "The Choice of the song is open to the participants but the song should not have any slang or derogatory language.",
          "The time limit is 3 minutes.",
          "Language can be English or Hindi.",
          "Participants should follow the event decorum.",
          "Karaoke must be given to the event coordinators on a pen drive only 25 minutes before the event.",
          "Participants must arrive 30 minutes before the event begins."
        ],
    
        judgingCriteria: [
          "Song selection.",
          "Presentation.",
          "Voice quality.",
          "Clarity.",
          "Rhythm.",
          "Participants appeal to the audience."
          
        ],
    
        contactDetails: [
          {
            name: "Thejas Rao",
            phoneNumber: "+91 9380174402",
            
          },
          {
            name: "Shrama Bhandary",
            phoneNumber: "+91 9945413269",
           
          }
        ],
        link:"https://drive.google.com/file/d/1-i3Qu9jJhsgNOsiZUf5TxHWgfN9mXidC/view?usp=sharing"
      }
      ],

    },
    {type:"Other Events",
    info:[
     /*----MayHem!-VALO ----*/
     {
       name: "MAYHEM!-Valo",  
       day: "1",                       
       time: "6:30 pm",
       venue: "Netravati Auditorium",
       date:"11th Nov",
       image: "/events/technical/DroneRace.webp",  
       subtype: "team",
       mode: "online",
       maxlimit: '5',
       fee: 750,

       prize:"₹15,000",
       registrations:[
                       "A maximum of only 64 teams can participate in each event. So register fast.",
                       "Registrations will start from 11 th Oct 9:00am IST and will end on 2 rd Nov 7:00pm IST.",
                       "VALORANT Registration Fees 750/- per team.",
                       "Each team will be given a Unique team code after the registration and payment is done."
       ],
       teamReq:[
           "Each team must contain exactly 5 players.",
           "One player is supposed to play only for one team.",
           "Each team must have a team captain. The team captain shall handle the administrative duties of the team.",
           "Each player has to play on their own game id. Sharing of game Id’s is not allowed."
          ],
       desc:
         "Team Challengers invites all university students to participate in the MAYHEM Gaming Tournament Series. The tournament will give a competitive gaming experience for the participants and gives them a chance to show their spot in Local Esports.",
       smallDesc:"Ready to take your gaming to the next level? Register Now",
       format:{
           "Schedule :":[
               "All the matches in the tournament bracket will be held online for both Valorant and CODM.",
               "Once the registration of all the teams is completed, a discord server will be created containing all the team players and the organizers.",
               "The detailed tournament bracket, match schedule and other essential details will be updated in the discord server daily. ",
           ],
           "Pre Match :":[
               "Team members should be online 5 mins before their scheduled time.",
               "In case a team member fails to show up, the administrators will wait for 10 mins. If he/she doesn’t show up at the end of this interval, the match will go on as it is.",
               "The technical issues of the players is their own Responsibility.",
               "The decisions of the organizers are final during any dispute."
           ],
           "Game Specifications - VALORANT :":[
               "Party Status: Closed",
               "Map: Chosen Map as determined using pick/ban phase",
               "Mode: Standard",
               "Cheats: Off",
               "Tournament Mode: On",
               "Overtime win by Two: On"
           ]
       }
       , 
       rules: "",
   
       judgingCriteria: [
         " The team which beats its opponent in a match is declared as the winner of that match and will proceed forward in the tournament. No other judging criteria will be used.",
         "Although if any of the players in the winning team is caught cheating, the team will be disqualified and the opponent team will be declared the winners."
       ],
   
       contactDetails: [
         {
           name: "Toshan",
           phoneNumber: "+91 8549039062",
           
         },
         {
           name: "J S Ninad ",
           phoneNumber: "+91 8880738765",
          
         }
       ],
       link:"https://drive.google.com/file/d/14e-dsEsoJ363ij1LdHKec0VT4ttMXFP6/view?usp=sharing"
     },



      /*----MayHem!-CODM ----*/
      {
        name: "MAYHEM!-CODM",  
        day: "1",                       
        time: "6:30 pm",
        venue: "Netravati Auditorium",
        date:"11th Nov",
        image: "/events/technical/DroneRace.webp",  
        subtype: "team",
        mode: "online",
        maxlimit: '5',
        fee: 600,

        prize:"₹10,000",
        registrations:[
                        "A maximum of only 64 teams can participate in each event. So register fast.",
                        "Registrations will start from 11 th Oct 9:00am IST and will end on 2 rd Nov 7:00pm IST.",
                        "CODM Registration Fees 600/-.",
                        "Each team will be given a Unique team code after the registration and payment is done."
        ],
        teamReq:[
            "Each team must contain exactly 4 players.",
            "One player is supposed to play only for one team.",
            "Each team must have a team captain. The team captain shall handle the administrative duties of the team.",
            "Each player has to play on their own game id. Sharing of game Id’s is not allowed."
           ],
        desc:
          "Team Challengers invites all university students to participate in the MAYHEM Gaming Tournament Series. The tournament will give a competitive gaming experience for the participants and gives them a chance to show their spot in Local Esports.",
        smallDesc:"Ready to take your gaming to the next level? Register Now",
        format:{
            "Schedule :":[
                "All the matches in the tournament bracket will be held online for both Valorant and CODM.",
                "Once the registration of all the teams is completed, a discord server will be created containing all the team players and the organizers.",
                "The detailed tournament bracket, match schedule and other essential details will be updated in the discord server daily. ",
            ],
            "Pre Match :":[
                "Team members should be online 5 mins before their scheduled time.",
                "In case a team member fails to show up, the administrators will wait for 10 mins. If he/she doesn’t show up at the end of this interval, the match will go on as it is.",
                "The technical issues of the players is their own Responsibility.",
                "The decisions of the organizers are final during any dispute."
            ],
            "Game Specifications - CODM :":[
                "Lobby status : Private",
                "Mode: Multiplayer (Domination)",
            ]
        }
        , 
        rules: "",
    
        judgingCriteria: [
          " The team which beats its opponent in a match is declared as the winner of that match and will proceed forward in the tournament. No other judging criteria will be used.",
          "Although if any of the players in the winning team is caught cheating, the team will be disqualified and the opponent team will be declared the winners."
        ],
    
        contactDetails: [
          {
            name: "Toshan",
            phoneNumber: "+91 8549039062",
            
          },
          {
            name: "J S Ninad ",
            phoneNumber: "+91 8880738765",
           
          }
        ],
        link:"https://drive.google.com/file/d/14e-dsEsoJ363ij1LdHKec0VT4ttMXFP6/view?usp=sharing"
      },


     /* -----Blind coding----- */
     {
      name: "BLIND CODING",  
      day: "1",                       
      time: "6:30 pm",
      venue: "Netravati Auditorium",
      date:"11th Nov",
      image: "/events/technical/DroneRace.webp",  
      subtype: "team",
      mode: "offline",
      maxlimit: '1',
      fee: 2500,

      prize:"₹6,000",
      registrations:[
                      "Only on spot registration",
                      
      ],
      teamReq:[
          "It is a solo event."
         ],
      desc:
        "The name says it all, isn't it? Do you think you can put together a C program with the screen switched off? This event tests your skills, and you better be the best in coding amongst all the competitors, because we know each of your speeds are going to be blinding. So Coders, brush up your skills and make the most of this opportunity in becoming the best 'Blind programmer!' So hurry up! Turn off that monitor already.",
      smallDesc:"Are you ready to code with the screen's off? Grab the chance now!",
      format:{
          "Round Details :":[
              "The event consists of two rounds.",
              "Each participant has to write the code for the problem statement, with MONITOR OFF.",
              "In the round1(entry-level) medium complexity task will be given(you will be made to keep the monitor off ).",
              "In round 2(qualifying round ) high complexity task will be given.",
              "The college will provide all the needed accessories for the event.",
              "Programming languages should be either C or C++.",
              "Systems will be provided at the venue.",
              "In the case of cheating, using a phone or using any unnecessary gadgets will lead to disqualification of the participant."
          ],
          
      }
      , 
      rules: "",
  
      judgingCriteria: [
        " The participant whose code gets executed will be given a higher preference.",
        "The second preference will be given to the code with the least No. of errors.",
        "In case of a tie in No. of errors then the timing will be considered.",
        "Shortlisted participants of round 1 will appear for round 2 for which the above rules will be applicable."
      ],
  
      contactDetails: [
        {
          name: "Jayesh Gurav",
          phoneNumber: "+91 7624871862",
          
        }
      ],
      link:"https://drive.google.com/file/d/1wfJOdKK_dYXvWVR4B3ggnr4F07chzcro/view?usp=sharing"
    },
    /* ---- HOGATHON ----- */
    {
      name: "BURP!",  
      day: "3",                       
      time: "6:30 pm",
      venue: "Netravati Auditorium",
      date:"13th Nov",
      image: "/events/technical/DroneRace.webp",  
      subtype: "solo",
      mode: "offline",
      maxlimit: '1',
      fee: 150,

      prize:"Acrylic Sheet Awards",
      registrations:[
                      "Only spot registrations.",
      ],
      teamReq:[
        "It is an individual event."
         ],
      desc:
        "We've all had friends tell us, \"If there was an eating competition, I would have easily won.\" Tadaa it's finally here. Here is a mega food-eating competition and the race to hog it all as quickly as possible. Compete against your friends to see who can gulp down the most in the shortest amount of time in three rounds. The only event where you can win prizes by eating your favorite food.",
      smallDesc:"A Mega Eating Competition",
      format:{
          "Round-1 :BAJEEL":[
              "The duration of this round will be 2 minutes and 30 seconds.",
              "The items consumed within the stipulated time shall be recorded for every participant.",
              
          ],
          "Round-2 :SPICY MOUTH":[
              "The number of candidates selected from round 1 shall be selected to compete in round 2.",
              "The duration of this round will be 2 minutes and 30 seconds.",
              "If a contestant requests water bottles during this round, they will be given, but an additional 20 seconds will be added.",
            
          ],
          "Round-3 - A STOMACH-CAKE :":[
              "The contestant must consume the cake with their mouth only; if they use their hands, they will be disqualified.",
              "The duration of this round will be 1 minute.",
              "The candidate who finishes the cake first gets the reward.",
          ]
      }
      , 
      rules: [
        "Each session will comprise three rounds.",
        "Elimination will be based on the time.",
        "The judge's verdict is considered final and no arguments will be entertained."
      ],
  
      judgingCriteria: "",
  
      contactDetails: [
        {
          name: "Thejas Rao",
          phoneNumber: "+91 9380174402",
          
        },
        
      ],
      link:"https://drive.google.com/file/d/1ZrqFNpYEKj3BX_1w4ylSzEVHDwF3M30d/view?usp=sharing"
    },
    /*-----Sherlocked------ */
    {
      name: "SHERLOCKED",  
      day: "1",                       
      time: "6:30 pm",
      venue: "Netravati Auditorium",
      date:"11th Nov",
      image: "/events/technical/Sherlocked.webp",  
      subtype: "team",
      maxlimit: '4',
      mode: "online",
      fee: 300,
      
      prize:"₹4,000",
      registrations:[
                      "On spot registrations are available.",
                      "The registration fee: ₹300 per team"
      ],
      teamReq:[
        "A team can have 2-4 members"
         ],
      desc:
        "The game has been undertaken! Hold on tight as we begin our investigation into the mystery. Bring out your detective skills and zeal to solve the bewildering crime. Setting off on an exciting detective adventure, solving ingenious puzzles, and investigating crimes as promptly as possible before the real world turns upside down!",
      smallDesc:"The Ultimate Puzzle solving game.",
      format:{
          "Round-1 :":[
              "While attempting to solve some complicated problems, Sherlock Holmes and Dr.John Watson are looking for shrewd investigators who can aid them in their investigation.",
              "Don’t just see–observe! In this round, you must solve some mysteries fueled by codes, ciphers, puzzles, encryption, and decryption.",
              "First-round is the qualifying round.",
              "The top 10 teams will be selected for the next round."
              
          ],
          "Round-2 :":[
              "A good detective knows that every task, every interaction, no matter how seemingly banal, has the potential to contain multitudes. In this round, you have 12 hours to solve the crime. Case files will be given to the teams and the location of the crime scene will be shared.Showcase your uncanny ability to gather evidence based on your honed skills of observation and deductive reasoning. When you have excluded the impossible, whatever remains, however impossible, must be the truth. The team who solves the crime and brings the culprit before the law with proper evidence will be considered winners! ",
              "6 hours of time will be given for the completion of the second round.",
              "The decision of the organizers will be final and binding.",
              "A submission link will be sent where the teams must drop their answers along with evidence."
            
          ],
      }
      , 
      rules:"",
  
      judgingCriteria: [
        "Round 1: Top 10 teams who solve the mystery will be qualified for the next round.",
        "Round 2: The winning team will be the one that cracks the case in the allotted 12 hours."
      ],
  
      contactDetails: [
        {
          name: "Rachana Shetty",
          phoneNumber: "+91 7620533015",
          
        },
        
      ],
      link:"https://drive.google.com/file/d/1LSJ3vH8RKOL4O0bx0UN8LM9Cg4mKb_11/view?usp=sharing"
    }
    ]
  }
]