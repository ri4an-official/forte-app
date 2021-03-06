export const Dollar = ({ cn, click }: { cn?: string; click?: () => void }) => (
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
            d='M16 8.00008C16 6.00008 13.9999 5.00025 11.9999 5.00025M11.9999 5.00025C11.4999 5.00025 7.99997 5.0004 7.99997 8.00024C7.99997 11.0001 16 13 16 16.0001C16 19.0002 12.4999 19.0002 11.9999 19.0002M11.9999 5.00025L12 3.50014M11.9999 19.0002C9.99989 19.0002 7.99997 18.0002 7.99997 16.0002M11.9999 19.0002L12 20.5'
            stroke='#303030'
            stroke-width='2.2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
)
