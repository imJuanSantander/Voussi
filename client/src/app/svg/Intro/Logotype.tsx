'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from 'gsap/CustomEase'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(CustomEase)

interface Props {
  className: string
}

const Logotype: React.FC<Props> = ({ className }) => {

  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()

    },
    { scope: container }
  )

  return (
    <div ref={container} className={className}>
      <svg width="63" height="16" viewBox="0 0 63 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.42 15L0.22 0.0999987H3.18L7.26 12.44H6.68L10.76 0.0999987H13.72L8.54 15H5.42ZM19.4892 15.24C18.4226 15.24 17.4492 14.9933 16.5692 14.5C15.7026 14.0067 15.0092 13.3333 14.4892 12.48C13.9826 11.6267 13.7292 10.6533 13.7292 9.56C13.7292 8.46667 13.9826 7.49333 14.4892 6.64C15.0092 5.78667 15.7026 5.11333 16.5692 4.62C17.4359 4.12667 18.4092 3.88 19.4892 3.88C20.5559 3.88 21.5226 4.12667 22.3892 4.62C23.2559 5.11333 23.9426 5.78667 24.4492 6.64C24.9692 7.48 25.2292 8.45333 25.2292 9.56C25.2292 10.6533 24.9692 11.6267 24.4492 12.48C23.9292 13.3333 23.2359 14.0067 22.3692 14.5C21.5026 14.9933 20.5426 15.24 19.4892 15.24ZM19.4892 12.84C20.0759 12.84 20.5892 12.7 21.0292 12.42C21.4826 12.14 21.8359 11.7533 22.0892 11.26C22.3559 10.7533 22.4892 10.1867 22.4892 9.56C22.4892 8.92 22.3559 8.36 22.0892 7.88C21.8359 7.38667 21.4826 7 21.0292 6.72C20.5892 6.42667 20.0759 6.28 19.4892 6.28C18.8892 6.28 18.3626 6.42667 17.9092 6.72C17.4559 7 17.0959 7.38667 16.8292 7.88C16.5759 8.36 16.4492 8.92 16.4492 9.56C16.4492 10.1867 16.5759 10.7533 16.8292 11.26C17.0959 11.7533 17.4559 12.14 17.9092 12.42C18.3626 12.7 18.8892 12.84 19.4892 12.84ZM31.0961 15.24C30.2561 15.24 29.5228 15.0533 28.8961 14.68C28.2828 14.3067 27.8094 13.7867 27.4761 13.12C27.1561 12.4533 26.9961 11.6733 26.9961 10.78V4.12H29.6161V10.56C29.6161 11.0133 29.7028 11.4133 29.8761 11.76C30.0628 12.0933 30.3228 12.36 30.6561 12.56C31.0028 12.7467 31.3894 12.84 31.8161 12.84C32.2428 12.84 32.6228 12.7467 32.9561 12.56C33.2894 12.36 33.5494 12.0867 33.7361 11.74C33.9228 11.3933 34.0161 10.98 34.0161 10.5V4.12H36.6361V15H34.1561V12.86L34.3761 13.24C34.1228 13.9067 33.7028 14.4067 33.1161 14.74C32.5428 15.0733 31.8694 15.24 31.0961 15.24ZM43.2116 15.24C42.0516 15.24 41.0382 14.9667 40.1716 14.42C39.3182 13.86 38.7316 13.1067 38.4116 12.16L40.3716 11.22C40.6516 11.8333 41.0382 12.3133 41.5316 12.66C42.0382 13.0067 42.5982 13.18 43.2116 13.18C43.6916 13.18 44.0716 13.0733 44.3516 12.86C44.6316 12.6467 44.7716 12.3667 44.7716 12.02C44.7716 11.8067 44.7116 11.6333 44.5916 11.5C44.4849 11.3533 44.3316 11.2333 44.1316 11.14C43.9449 11.0333 43.7382 10.9467 43.5116 10.88L41.7316 10.38C40.8116 10.1133 40.1116 9.70667 39.6316 9.16C39.1649 8.61333 38.9316 7.96667 38.9316 7.22C38.9316 6.55333 39.0982 5.97333 39.4316 5.48C39.7782 4.97333 40.2516 4.58 40.8516 4.3C41.4649 4.02 42.1649 3.88 42.9516 3.88C43.9782 3.88 44.8849 4.12667 45.6716 4.62C46.4582 5.11333 47.0182 5.80667 47.3516 6.7L45.3516 7.64C45.1649 7.14667 44.8516 6.75333 44.4116 6.46C43.9716 6.16667 43.4782 6.02 42.9316 6.02C42.4916 6.02 42.1449 6.12 41.8916 6.32C41.6382 6.52 41.5116 6.78 41.5116 7.1C41.5116 7.3 41.5649 7.47333 41.6716 7.62C41.7782 7.76667 41.9249 7.88667 42.1116 7.98C42.3116 8.07333 42.5382 8.16 42.7916 8.24L44.5316 8.76C45.4249 9.02667 46.1116 9.42667 46.5916 9.96C47.0849 10.4933 47.3316 11.1467 47.3316 11.92C47.3316 12.5733 47.1582 13.1533 46.8116 13.66C46.4649 14.1533 45.9849 14.54 45.3716 14.82C44.7582 15.1 44.0382 15.24 43.2116 15.24ZM53.485 15.24C52.325 15.24 51.3117 14.9667 50.445 14.42C49.5917 13.86 49.005 13.1067 48.685 12.16L50.645 11.22C50.925 11.8333 51.3117 12.3133 51.805 12.66C52.3117 13.0067 52.8717 13.18 53.485 13.18C53.965 13.18 54.345 13.0733 54.625 12.86C54.905 12.6467 55.045 12.3667 55.045 12.02C55.045 11.8067 54.985 11.6333 54.865 11.5C54.7583 11.3533 54.605 11.2333 54.405 11.14C54.2183 11.0333 54.0117 10.9467 53.785 10.88L52.005 10.38C51.085 10.1133 50.385 9.70667 49.905 9.16C49.4383 8.61333 49.205 7.96667 49.205 7.22C49.205 6.55333 49.3717 5.97333 49.705 5.48C50.0517 4.97333 50.525 4.58 51.125 4.3C51.7383 4.02 52.4383 3.88 53.225 3.88C54.2517 3.88 55.1583 4.12667 55.945 4.62C56.7317 5.11333 57.2917 5.80667 57.625 6.7L55.625 7.64C55.4383 7.14667 55.125 6.75333 54.685 6.46C54.245 6.16667 53.7517 6.02 53.205 6.02C52.765 6.02 52.4183 6.12 52.165 6.32C51.9117 6.52 51.785 6.78 51.785 7.1C51.785 7.3 51.8383 7.47333 51.945 7.62C52.0517 7.76667 52.1983 7.88667 52.385 7.98C52.585 8.07333 52.8117 8.16 53.065 8.24L54.805 8.76C55.6983 9.02667 56.385 9.42667 56.865 9.96C57.3583 10.4933 57.605 11.1467 57.605 11.92C57.605 12.5733 57.4317 13.1533 57.085 13.66C56.7383 14.1533 56.2583 14.54 55.645 14.82C55.0317 15.1 54.3117 15.24 53.485 15.24ZM59.6184 15V4.12H62.2384V15H59.6184ZM59.6184 2.9V0.0999987H62.2384V2.9H59.6184Z" fill="white"/>
      </svg>
    </div>
  )
}

export default Logotype