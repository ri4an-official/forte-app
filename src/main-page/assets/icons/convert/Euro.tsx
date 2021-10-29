export const Euro = ({ cn, click }: { cn?: string; click?: () => void }) => (
    <svg
        className={cn}
        onClick={click}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M17 19.4845C15.5699 20.4417 13.8501 21 12 21C8.87957 21 6.13006 19.412 4.51554 17C3.55826 15.5699 2.99999 13.8501 2.99999 12C2.99999 10.1499 3.55826 8.4301 4.51554 7C6.13006 4.58803 8.87957 3 12 3C13.8501 3 15.5699 3.55827 17 4.51555M1.81114 10.5H11M1.10547 13.5H8.99999'
            stroke='#303030'
            stroke-width='2.2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
)
