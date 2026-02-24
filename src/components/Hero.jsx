import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="hero-subtitle">ビジネスを加速するAI導線</span>
                    <h1 className="hero-title">
                        データとテクノロジーで<br />
                        <span>人とビジネスの未来</span>を<br />クリアにする
                    </h1>
                    <p className="hero-description">
                        最新のAI技術と確かなコンサルティングで、あなたのビジネスの課題を解決し、新しい価値を創造します。複雑な問題をシンプルに、見通しよく。
                    </p>
                    <div className="hero-buttons">
                        <Link to="contact" smooth={true} duration={800} offset={-50} className="btn btn-primary">
                            無料相談を予約する
                        </Link>
                        <Link to="services" smooth={true} duration={800} offset={-50} className="btn btn-secondary">
                            サービスを見る
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
