import './App.css';
import contact from './assets/contact.json';

import Lottie from 'react-lottie';
import React, {useEffect, useState} from 'react';
import home from './assets/home.json';
import downArrow from './assets/down_arrow.json';
import github_white from './assets/github_white.png';
import github_cyan from './assets/github.png';
import mail_white from './assets/mail_white.png';
import mail_cyan from './assets/mail.png';
import twitter_white from './assets/twitter_white.png';
import twitter_cyan from './assets/twitter.png';
import AnimatedCursor from 'react-animated-cursor';
import TextTransition, {presets} from 'react-text-transition';
import logo from './assets/logo.png';
import project3 from './assets/project3.jpg';
import project4 from './assets/project4.jpg';
import {useAlert} from 'react-alert';

function App() {
  const [githubState, setGithub] = useState({img: github_white});
  const [mailState, setmail] = useState({img: mail_white});
  const [twitterState, settwitter] = useState({img: twitter_white});
  const [index, setIndex] = useState(0);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('rgba(255,255,255,0.5)');

  const [emailError, setEmailError] = useState('rgba(255,255,255,0.5)');
  const [messageError, setMessageError] = useState('rgba(255,255,255,0.5)');

  const alertH = useAlert();

  const onFocusMessage = () => {
    setMessageError('#00ffe0');
  };
  const onFocusName = () => {
    setNameError('#00ffe0');
  };

  const onFocusEmail = () => {
    setEmailError('#00ffe0');
  };

  const handleNameError = () => {
    if (username.length < 3) {
      setNameError('red');

      return false;
    } else {
      setNameError('#4BF70C');

      return true;
    }
  };
  const handleMessageError = () => {
    if (message.length < 10) {
      setMessageError('red');

      return false;
    } else {
      setMessageError('#4BF70C');

      return true;
    }
  };

  const handleEmailError = (email) => {
    if (
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(
        email
      )
    ) {
      setEmailError('#4BF70C');
      return true;
    } else {
      setEmailError('red');
      return false;
    }
  };

  const handleClick = () => {
    handleEmailError(email);
    handleNameError();
    handleMessageError();

    if (handleEmailError(email) && handleNameError() && handleMessageError()) {
      alertH.success('Your message has been recorded!');
    }
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const TEXTS = [
    'ReactJs',
    'Node',
    'CSS',
    'HTML',
    'NodeJS',
    'React Native',
    'Python',
    'Javascript',
  ];

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const defaultOptions_home = {
    loop: true,
    autoplay: true,
    animationData: home,
  };
  
  const defaultOptions_contact = {
    loop: true,
    autoplay: true,
    animationData: contact,
  };

  const defaultOptions_downArrow = {
    loop: true,
    autoplay: true,
    animationData: downArrow,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='mainContainer'>
      <AnimatedCursor
        innerSize={25}
        outerSize={25}
        color='150,51,255'
        outerAlpha={0.2}
        innerScale={0.4}
        outerScale={4}
      />
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} />
          <div className='logo_text'>
            Shagun
            <br />
            <p>Developer</p>
          </div>
        </div>
        <div className='slider-menu'>
          <div className='horizontal-rule-slider' />
          <div className='menu-items'>
            <a  href='#home'>Home</a>
          </div>

          <div className='horizontal-rule-slider' />
          <div className='menu-items'>
            <a  href='#about'>About Me</a>
          </div>
          <div className='horizontal-rule-slider' />
          <div className='menu-items'>
            <a  href='#work'>Work</a>
          </div>
          <div className='horizontal-rule-slider' />
          <div className='menu-items'>
            <a  href='#contact'>Contact</a>
          </div>
          <div className='horizontal-rule-slider' />

          <div className='contactIcons menu-items'>
          <a href='https://github.com/dreat42'><img
              src={githubState.img}
              onMouseEnter={() => {
                setGithub({
                  img: github_cyan,
                });
              }}
              onMouseOut={() => {
                setGithub({
                  img: github_white,
                });
              }}
            />
            </a>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=shagunsethi3342@gmail.com'><img
              src={mailState.img}
              onMouseEnter={() => {
                setmail({
                  img: mail_cyan,
                });
              }}
              onMouseOut={() => {
                setmail({
                  img: mail_white,
                });
              }}
            />
            </a>

            <a href="https://twitter.com/sethi_shagun"><img
              src={twitterState.img}
              onMouseEnter={() => {
                settwitter({
                  img: twitter_cyan,
                });
              }}
              onMouseOut={() => {
                settwitter({
                  img: twitter_white,
                });
              }}
            />
            </a>
          </div>
        </div>
      </div>
      <div className='content' id='home'>
        <div className='header' >
        
          <div>
            <div className='header-text'>
              Hi, I'm Shagun,
              <br />
              Developer
              <div className='header-subtext'>
                Full stack Developer / Android Developer
              </div>
            </div>
            <a  href='#contact'><div className='button'>Contact Me</div></a>
          </div>

          <div className='header-text'>
            <Lottie
              options={defaultOptions_home}
              height={600}
              width={600}
              isClickToPauseDisabled={true}
            />
          </div>
        </div>
        <div className='scrollArrow'>
          Scroll Down
          <Lottie
            options={defaultOptions_downArrow}
            height={70}
            width={70}
            isClickToPauseDisabled={true}
          />
        </div>
        
        
        
        <div className='about'  id='about'>
          <div className='about_1'>
            <p>About Me</p>
            <p>
              Shagun Sethi, a web/android developer focused on crafting great
              user experiences. Designing and Coding have been my passion since
              the days I started working with computers but I found myself into
              web design/development since 2019. I enjoy creating beautifully
              designed, intuitive and functional websites and apps.
              <br />
              <br />
              For over past 3 years, I have been learning new and innovative web
              technologies and developing my coding skills because I believe
              specialization is for insects. We design, build and implement
              augmented reality apps for any business or industry. We help to
              enhance learning and training through AR.
            </p>
          </div>
          <div className='about_2'></div>
          <div className='about_3'>
            <h1>
              <TextTransition
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.stiff}
              />
            </h1>
          </div>
          

        </div>

        <div className='project'  id='work'>
          <div className='project_1'>
            <p>Projects</p>
          </div>
          <div className='tile'>
          <div className='tiles'>
          <div className="blog-card">
          <div className="meta">
            <div className="photo" style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)'}} />
            <ul className="details">
              <li className="author">Fund It</li>
              <li className="date">Jun. 3, 2020</li>
              
            </ul>
          </div>
          <div className="description">
            <h1>Fund It</h1>
            <h2>Donation Apllication for Android and IOS</h2>
            <p> Application used to request or donate money from google pay. Where a user can request money with his or her name and problem or on other hand can help anyone by giving fund.</p>
            <p className="read-more">
              <a href="https://github.com/dreat42/Fund-It">Go To</a>
            </p>
          </div>
        </div>
        
        <div className="blog-card alt">
          <div className="meta">
            <div className="photo" style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)'}} />
            <ul className="details">
              <li className="author">Music Player</li>
              <li className="date">Jun. 8 2020</li>
              
            </ul>
          </div>
          <div className="description">
            <h1>Music Player</h1>
            <h2>Web music player consisting of three songs to play</h2>
            <p>A web player where user can play three different songs , play pause backward forward also have an seek capability. </p>
            <p className="read-more">
              <a href="https://dreat42.github.io/music_player/">Go to</a>
            </p>
          </div>
          
        </div>
        
          </div>
          <div className='tiles2'>
          <div className="blog-card ">
          <div className="meta">
            <div className="photo" style={{backgroundImage: `url(${project3})`}} />
            <div className="details">
              <div className="author">Contact Site</div>
              <div className="date">Jun. 12, 2020</div>
              
            </div>
          </div>
          <div className="description">
            <h1>Contact Site</h1>
            <h2>Website consisting of backgrounnd video and social media contact buttons </h2>
            <p>It is a website consiste of side bar animations and background style video and a contact and social media buttons all together</p>
            <p className="read-more">
              <a href="https://dreat42.github.io/home/">Go To</a>
            </p>
          </div>
          
        </div>
        <div className="blog-card alt">
          <div className="meta">
            <div className="photo" style={{backgroundImage: `url(${project4})`}} />
            <ul className="details">
              <li className="author">Registration Site</li>
              <li className="date">Jun. 6, 2015</li>
              
            </ul>
          </div>
          <div className="description">
            <h1>Registration Site</h1>
            <h2>Website consisting of registration form data wil be added and site have a social media contact buttons</h2>
            <p>Registraion can be done on single click by adding name date of birth and other details.</p>
            <p className="read-more">
              <a href="https://dreat42.github.io/official1/">Go To</a>
            </p>
          </div>
          
        </div>
            
          </div>
          </div>

           
          
          
        </div>
        
        
        <div className='contact' id='contact'>
          <div className='contact_Left'>
            <div className='contact_header'>Contact me.</div>
            
              
            <form className='formContainer'>
              <input
                type='text'
                id='input-name'
                placeholder='Name'
                className='TextInput'
                onFocus={() => onFocusName()}
                onChange={handleUsername}
                style={{borderBottomColor: nameError, borderBottomWidth: 2}}
              />
              <input
                type='email'
                placeholder='Email address'
                className='TextInput'
                onChange={handleEmail}
                onFocus={() => onFocusEmail()}
                style={{borderBottomColor: emailError, borderBottomWidth: 2}}
              />

              <textarea
                name='message'
                type='text'
                placeholder='Message'
                className='TextInput-area'
                onChange={handleMessage}
                onFocus={() => onFocusMessage()}
                style={{borderBottomColor: messageError, borderBottomWidth: 2}}
              ></textarea>

              <div className='Submit' onClick={() => handleClick()}>
                SUBMIT
              </div>
            </form>
         
          </div>
          <div className='map'>
          <Lottie
            options={defaultOptions_contact}
            height={600}
            width={600}
            isClickToPauseDisabled={true}
            
          />
           </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
