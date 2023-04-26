import Hero from "@/components/Hero";

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2'

export default function About(){
    return(
        <>
            <Hero/>
            <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
                <h2 className={TITLE_CLASS }>Who Am I?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                Dolore doloribus numquam amet blanditiis excepturi facere quod vel, earum iusto. Assumenda vitae amet nihil aliquid beatae molestias enim dignissimos! Quisquam, quia.</p>
                <h2 className={TITLE_CLASS }>Career</h2>
                <p> test <br/>
                    test <br/>
                    test <br/>
                </p>
                <h2 className={TITLE_CLASS }>Skills</h2>
                <p>React, Node<br/>
                    Git<br/>
                    VsCode
                </p>
            </section>
        </>
    )
}