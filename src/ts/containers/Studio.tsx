import * as React from 'react'
import Meme from '@shared/models/Meme'

type StudioProps = {
  memes: Array<Meme>
}

function Studio({ memes }: StudioProps): JSX.Element {
  return (
    <div className="Studio">
      <div className="Studio__content">
        <span>Select a template</span>
      </div>
      <aside className="Studio__aside">
        <div className="buttons__actions">
          <button>Icon 1</button>
          <button>Icon 2</button>
        </div>
        <div className="gallery__memes">
          {memes.map(
            (meme: Meme): React.ReactNode => (
              <article className="meme__article" key={meme.id} data-id={meme.id}>
                <img src={meme.url} alt={meme.name} />
              </article>
            )
          )}
        </div>
      </aside>
    </div>
  )
}

export default Studio