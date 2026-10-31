import Link from "next/link";

export const Menu = () => {
    return (
        <>
            <ul>
                <li>
                    <Link href="/">home</Link>
                </li>

                <li>
                    <Link href="/about">about</Link>
                </li>

                <li>
                    <Link href="/contacts">contacts</Link>
                </li>

                <li>
                    <Link href="/users">users</Link>
                </li>

            </ul>
            <hr/>
        </>
    );
};