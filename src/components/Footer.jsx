/*
    File: Footer.jsx
    Author: Viraj
    Copyright: 2023 - Viraj https://edpark.space
    Version: 1.0
*/

import { getCopyrightYear } from "../utils/date";

export default function Footer() {
    return (
        <footer className="bg-neutGray-900 dark:bg-neutGray-1050 border-t border-neutGray-700 mt-auto px-mobileBound py-8 sm:px-6 sm:py-9 md:px-7 md:py-10 lg:px-8">
            <p className="font-heading text-center mx-auto">&copy; {getCopyrightYear()} <code>Viraj Karangutkar</code>. All rights reserved</p>
        </footer>
    );
}