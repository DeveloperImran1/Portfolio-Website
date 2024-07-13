

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import SatisfiedClientCard from "./SatisfiedClientCard";
import Title from "../Shared/Title";

const Testimonials = () => {
    const [clients, setClients] = useState([]);
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        fetch('/Client.json')
            .then(res => res.json())
            .then(data => setClients(data))


    }, [])

    useEffect(() => {
        fetch("/CompanyIcon.json")
            .then(res => res.json())
            .then(data => setIcons(data))
    }, [])
    return (
        <div id="review">
            <section className="py-6 mt-[50px] md:mt-[80px] mb-7 lg:mb-[40px] sm:py-12 max-w-[100vw] md:max-w-[calc(100vw-220px)] ">
                <div className="container  mx-auto space-y-8">
                   
                    <Title title={"Clients Reviews"} description={"I recently discussed various projects with clients and demonstrated how my services met their expectations"}></Title>
                    <Marquee className="max-w-full h-[470px]" autoFill="false" pauseOnHover="true" speed="100">


                        {
                            clients.map(client => <SatisfiedClientCard key={client.id} client={client} ></SatisfiedClientCard>)
                        }
                    </Marquee>

                </div>
            </section>
        </div>
    );
};

export default Testimonials;