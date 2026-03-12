/*
    File: TechSkills.jsx
    Author: Viraj
    Copyright: 2023 - Viraj https://edpark.space
    Version: 1.0
*/

import { techSkills } from "../constants/data";
import SkillIcon from "./SkillIcon";

export default function TechSkills() {
    return (
        <ul className="w-[100%] grid justify-items-center items-start justify-center gap-9 md:gap-10 grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)]">
            {techSkills.map((category, id) => (
                <li className="w-[100%]" key={id}>
                    <h3 className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7">{category.category}</h3>
                    <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
                        {category.skills.map((skill) => (
                            <li
                                key={skill.title}
                                className="glassy-screen flex flex-col flex-nowrap items-center justify-center gap-3 p-4 sm:p-5 w-[10rem] min-w-[10rem] max-w-[8rem] min-h-[9.5rem] box-border shrink-0"
                            >
                                <SkillIcon title={skill.title} showLink={true} />
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}