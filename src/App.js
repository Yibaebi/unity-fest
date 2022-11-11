import React, { useMemo } from 'react'
import { Fade } from 'react-reveal'
import Flash from 'react-reveal/Flash'
import RubberBand from 'react-reveal/RubberBand'

import Shake from 'react-reveal/Shake'
import Tada from 'react-reveal/Tada'
import styles from './App.module.css'
import {
  aboutEventImg,
  chiomaJesus,
  donJazzy,
  foundationImg,
  heroImage,
  kaffy,
  kunleAfolayan,
  learnFromImg,
  LogoIpsum,
  LogoIpsum2,
  LogoIpsum3,
  mi,
  moAbudu,
  phyno,
  PrimaryLogo,
  pSquare,
  timiDakolo,
  tuFace,
  tyBello,
  watchFavsImg,
  winPrizesImg,
} from './assets'
import { Button, HorizontalScroller, SpeakerList } from './components'

function App() {
  const INDUSTRY_EXPERTS = useMemo(
    () => [
      {
        name: 'kaffy',
        image: kaffy,
      },
      {
        name: 'Don jazzy',
        image: donJazzy,
      },
      {
        name: 'Mo Abudu',
        image: moAbudu,
      },
      {
        name: 'Kunle Afolayan',
        image: kunleAfolayan,
      },
      {
        name: 'TY Bello',
        image: tyBello,
      },
      {
        name: 'MI',
        image: mi,
      },
    ],
    [],
  )

  const PERFORMING_ACTS = useMemo(
    () => [
      {
        name: 'Tuface Idibia',
        image: tuFace,
      },
      {
        name: 'Psquare',
        image: pSquare,
      },
      {
        name: 'Chioma Jesus',
        image: chiomaJesus,
      },
      {
        name: 'Phyno',
        image: phyno,
      },
      {
        name: 'MI',
        image: mi,
      },
      {
        name: 'Timi Dakolo',
        image: timiDakolo,
      },
    ],
    [],
  )

  return (
    <div className={styles.app_container}>
      <section className={styles.app_hero__section}>
        <PrimaryLogo className={styles.logo} />
        <Fade bottom>
          <section className={styles.hero_section__image}>
            <h3 className="uppercase">
              Prothesis Entertainment <span className={styles.purple}>Presents</span>
            </h3>
            <img src={heroImage} alt="Prothesis Entertainment" />
          </section>
        </Fade>

        <section className={styles.hero_section__date}>
          <h1 className="uppercase">
            <span className={styles.primary}>Unity</span> Fest
          </h1>
          <p className="uppercase">
            <span className={styles.purple}>16th</span> December 2022. <span className={styles.purple}>Enugu</span>,
            Nigeria
          </p>
        </section>

        <Button label="Register to attend" forever />
      </section>

      <section className={styles.app_about__section}>
        <h1 className="uppercase">
          About The <span className={styles.primary}>Event</span>
        </h1>
        <RubberBand delay={500}>
          <div className={styles.about_section__img}>
            <img src={aboutEventImg} alt="event art display" />
          </div>
        </RubberBand>
        <p>
          Enugu Unity fest is the first of its kind. It is an annual Festival that seeks to promote Enugu state’s Art,
          Entertainment and Cultural richness through a showcase of talent in the music, arts, film, cultural &
          contemporary dance and lots more with performances both from local and international artists. Our objective is
          to create a platform to groom our youth who are gifted or skilled in the area of arts and entertainment to
          break free from the mediocre mindset in delivering arts and entertainment. We also want to display the
          richness of our culture.
        </p>
        <p>
          Our targeted audience are from all age ranges as culture knows no age. However, youth from 10-35 will be at
          the forefront of this festival.
        </p>

        <Button label="Register to attend" hideHighlight borderColor="white" />
      </section>

      <section className={styles.learn_from__section}>
        <h4 className="uppercase">Morning Session - Masterclass</h4>
        <h1 className="uppercase">
          Learn from <br />
          <span className={styles.primary}>the best of the best</span>
        </h1>

        <Tada delay={500}>
          <img src={learnFromImg} alt="learning session" />
        </Tada>

        <p>
          A capacity building phase which has been carefully designed to spark an innovative mindset towards
          entertainment in the Enugu state youth that would be participating. The event will feature interactive
          workshops, fireside chats and AMA sessions with industry experts.
        </p>
        <p>The training is going to address tracks including:</p>

        <ul className={styles.learning_list}>
          <li>Film and Theatre</li>
          <li>Comedy</li>
          <li>Music</li>
          <li>Photography</li>
          <li>Dance</li>
        </ul>

        <div className={styles.info_group}>
          <h4>Venue</h4>
          <p>Golden Hearts Event Centre (Anamco), Emene.</p>
        </div>
        <div className={styles.info_group}>
          <h4>Time</h4>
          <p>8:00am</p>
        </div>
        <div className={styles.info_group}>
          <h4>Entry Requirements</h4>
          <p>None. Attendance is free for all</p>
        </div>
      </section>

      <section className={styles.industry_experts__section}>
        <SpeakerList speakers={INDUSTRY_EXPERTS} />
        <Button label="Register to attend" hideHighlight />
      </section>

      <section className={styles.skill_showcase__section}>
        <h1 className="uppercase">
          Showcase <br />
          <span className={styles.primary}>Your</span> skill or <span className={styles.primary}>talent</span>
        </h1>
        <p className="uppercase">And stand a chance to win Amazing Prizes</p>
        <Flash delay={500}>
          <img src={winPrizesImg} alt="prizes" />
        </Flash>

        <div className={styles.note_board}>
          <header>Prizes</header>
          <div className={styles.note_board__section}>
            <h2>Talent in Dance, Film and Music</h2>
            <p>Dancers, Actors, Singers, Rappers</p>
            <ul className={styles.note_board__instructions}>
              <li>Feature in the next Netflix movie project with Enugu Actors.</li>
              <li>6month record session with notable record labels.</li>
              <li>Scholarships into notable dance schools in Nigeria.</li>
              <li>Scholarships into notable film schools in Nigeria.</li>
            </ul>
          </div>
          <div className={styles.note_board__section}>
            <h2>Talent in Art, design, Music, PhotogrAPHY and writing</h2>
            <p>Graphic Designers, Artists (Physical or Digital), Painters, ScripWriters, Music producers</p>
            <ul className={styles.note_board__instructions}>
              <li>
                50 Laptops to be won for graphics designers, script writers, photographers, DJs and music producers,
                DJs.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.note_board}>
          <header>How to Participate</header>
          <div className={styles.note_board__section}>
            <h2>Talent in Dance, Film and Music</h2>
            <p>Dancers, Actors, Singers, Rappers</p>
            <span>
              Send a 1-2 min video of you performing your skill. Finalists will be chosen and called for audition 2
              weeks to the event. The top 2 finalists also stand a chance to perform on the same stage with your
              favourite artistes at the concert.
            </span>
          </div>
          <div className={styles.note_board__section}>
            <h2>Talent in Art, design, Music, PhotogrAPHY and writing</h2>
            <p>Graphic Designers, Artists (Physical or Digital), Painters, ScripWriters, Music producers</p>
            <span>
              Submit samples of your work using the link below. Finalists will be chosen and awarded on the day of.
            </span>
          </div>
        </div>
        <div className={styles.note_board}>
          <header>Things to note</header>
          <div className={styles.note_board__section}>
            <span>Submission is open only to residents of Enugu. Application closes ....</span>
          </div>
        </div>

        <Button label="Submit your Application" hideHighlight />
      </section>

      <section className={styles.learn_from__section}>
        <h4 className="uppercase">Evening Session - Concert</h4>
        <h1 className="uppercase">
          Come Watch
          <br />
          <span className={styles.primary}>your faves On Stage</span>
        </h1>
        <Shake delay={500}>
          <img src={watchFavsImg} alt="learning session" />
        </Shake>

        <p style={{ marginBottom: '32px' }}>
          A 60,000 capacity arts and entertainment concert featuring a mix of rated artists and local indigenous talent.
          It will be a night of pure entertainment and music.
        </p>
        <div className={styles.info_group}>
          <h4>Venue</h4>
          <p>Nnamdi Azikiwe Stadium, Ogui Road, Enugu.</p>
        </div>
        <div className={styles.info_group}>
          <h4>Time</h4>
          <p>7:00pm</p>
        </div>
        <div className={styles.info_group}>
          <h4>Entry Requirements</h4>
          <p>PVC</p>
        </div>
      </section>

      <section className={styles.industry_experts__section}>
        <SpeakerList title="Perform Acts" speakers={PERFORMING_ACTS} />
        <Button label="Register to attend" hideHighlight />
      </section>

      <div className={styles.sponsors_section__wrapper}>
        <section className={styles.sponsors_section}>
          <h1 className="uppercase">Sponsors</h1>
          <HorizontalScroller
            text={
              <React.Fragment>
                <LogoIpsum className={styles.brand} />
                <LogoIpsum2 className={styles.brand} />
                <LogoIpsum3 className={styles.brand} />
                <LogoIpsum className={styles.brand} />
                <LogoIpsum2 className={styles.brand} />
              </React.Fragment>
            }
            customContainerClassName={styles.horizontal_scroll_text}
          />
          <HorizontalScroller
            text={
              <React.Fragment>
                <LogoIpsum className={styles.brand} />
                <LogoIpsum2 className={styles.brand} />
                <LogoIpsum3 className={styles.brand} />
                <LogoIpsum className={styles.brand} />
                <LogoIpsum2 className={styles.brand} />
              </React.Fragment>
            }
            customContainerClassName={styles.horizontal_scroll_text}
            reverse
          />
        </section>
      </div>

      <footer className={styles.footer}>
        <PrimaryLogo className={styles.logo} />
        <p className="uppercase">Powered by</p>
        <img src={foundationImg} alt="peter mba foundation" />
        <span className={styles.copy}>&copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

export default App
