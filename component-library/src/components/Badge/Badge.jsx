export default function Badge({children, style = 'square', color = 'gray'}) {
    return (
        <span className={`badge ${color} ${style}`}>
            {children}
        </span>
    )
}