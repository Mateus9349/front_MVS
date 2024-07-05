import Link from "../Link";

const BotaoLink = ({ text, href }) => {
    return (
        <>
            <button>
                <Link text={text} href={href} />
            </button>
        </>
    )
}

export default BotaoLink;