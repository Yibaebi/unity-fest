import React from 'react'
import styles from './styles.module.css'

const SpeakerList = ({ speakers = [], title = 'Trainers and industry experts' }) => {
  return (
    <div className={styles.speakers_container}>
      <header>{title}</header>
      <div className={styles.speaker_list__wrapper}>
        <section className={styles.speaker_list__container}>
          {speakers.map((speaker, idx) => (
            <div key={idx} className={styles.speaker_details}>
              <span className={styles.speaker_image}>
                <img src={speaker.image} alt={speaker.name} />
              </span>
              <p className="uppercase">{speaker.name}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export { SpeakerList }
