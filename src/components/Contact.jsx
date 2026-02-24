import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <section className="section contact-section" id="contact">
                <div className="container">
                    <motion.div
                        className="contact-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">まずは無料でご相談を</h2>
                        <p className="contact-text">
                            「AIで何ができるかわからない」「自社の課題にどう活かせるか知りたい」<br />
                            そんな段階からでも、まずはお気軽にご相談ください。
                        </p>

                        <div className="contact-btn-wrapper">
                            <a href="mailto:info@example.com" className="btn btn-primary contact-btn">
                                <Mail size={24} />
                                <span>メールでお問い合わせ</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer-logo">AI Consultant <span>.</span></div>
                    <p className="footer-copy">&copy; {new Date().getFullYear()} AI Consultant. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Contact;
