import {FC} from "react";

type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}

const SubmitPage: FC<Props> = async ({searchParams}) => {


    fetch('/ljsonmsakjidugasdgf', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            key1: 'value1',
            key2: 'value2',
        })
    })

    const awaitedSP = await searchParams;


    return (
        <>
            this is page after submitting {awaitedSP.name}
        </>
    )
}
export default SubmitPage;