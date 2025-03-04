import styles from "@/app/components/footer/footer.module.css"

export default function facebook() {
  return (
    <svg className={styles.facebook} viewBox="0 0 50 50">
        <path
        style={{fill: 'none', strokeWidth: "2", strokeLinecap: "round", strokeMiterlimit: '10'}} d="M25,4C13.402,4,4,13.402,4,25c0,10.528,7.756,19.222,17.861,20.74V30.566h-5.196v-5.52h5.196v-3.673c0-6.081,2.963-8.751,8.017-8.751c2.421,0,3.701,0.179,4.307,0.261v4.818h-3.447c-2.145,0-2.895,2.034-2.895,4.327v3.017h6.289l-0.853,5.52h-5.435v15.22C38.093,44.395,46,35.631,46,25C46,13.402,36.598,4,25,4z"/>
    </svg>
  )
}
