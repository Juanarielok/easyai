import React from 'react';

import './estilo-banner-historia.scss';

function BannerHistoria() {
    return (
        <div className="principal">
            <div>
                <h1>Our Mission</h1>
                <p>Our mission is both clear and significant: To democratize the utility of artificial intelligence across various sectors and demographics. We aim to provide seamless access to AI tools, empowering individuals and businesses alike. </p>
            </div>
            <div>
                <h1>Why Choose Us?</h1>
                <ul className="lista">
                    <li><b>User-Friendly Design</b>: AI Easy is designed to be navigable and intuitive, making advanced technologies accessible to users regardless of their technical expertise.</li>

                    <li><b>Comprehensive Tool-kit</b>: We offer a broad spectrum of AI-based solutions, from analytics to content creation, amalgamated in one comprehensive platform.</li>

                    <li><b>Data Security</b>: Ensuring the security of your data is a priority for us.
                        Our robust security protocols provide a trustworthy environment.</li>

                    <li><b>Expert Support</b>: Our dedicated support team is available to resolve any queries or challenges you may encounter, providing a seamless user experience.</li>
                </ul>
            </div>

        </div>
    );
}

export default BannerHistoria;
