import * as React from 'react'
import { useEffect, useState } from 'react'
import Modal from '@components/Modal/Modal'
import { wait } from '@utils/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ExportProps = {
  onClose: Function
  canvas: React.RefObject<HTMLCanvasElement>
}

function Export(props: ExportProps): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [img, setImg] = useState<string>('')

  useEffect(() => {
    ;(async (): Promise<void> => {
      const dataUrl: string = props.canvas.current.toDataURL()
      setImg(dataUrl)
      await wait()
      setIsLoading(false)
    })()
  }, [])

  const handleDownload = (): void => {}

  const handleClose = (): void => {
    props.onClose()
    setImg(null)
  }

  return (
    <Modal onClose={handleClose} isLoading={isLoading}>
      <div className="Export">
        <div className="meme-img">
          <img src={img} />
        </div>
        <div className="meme-actions-share">
          <a download="meme.png" href={img.replace(/^data:image\/png/, 'data:application/octet-stream')}>
            <button className="share-button" id="share-local">
              <FontAwesomeIcon icon={['fas', 'download']} />
            </button>
          </a>
          <button className="share-button social-share-button" id="share-twitter">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default Export