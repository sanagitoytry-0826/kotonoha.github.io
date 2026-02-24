import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section className="section about-section" id="about">
            <div className="container">
                <h2 className="section-title">コンサルタントについて</h2>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="about-image">
                        {/* 実際のプロフィール写真に差し替える領域 */}
                    </div>

                    <div className="about-text">
                        <span className="about-subtitle">AI Consultant</span>
                        <h3 className="about-greeting">
                            「AI×人間の強み」で、<br />
                            一歩先のビジネスを創る。
                        </h3>

                        <p className="about-description">
                            はじめまして。私は、最新のAI技術とビジネスプロセスを融合させるコンサルティングを行っています。
                            技術だけが先行するのではなく、現場で本当に使える「血の通ったDX」を推進することが私の使命です。
                        </p>

                        <ul className="strengths-list">
                            <li>
                                <CheckCircle2 className="check-icon" size={24} />
                                <span>経営課題から逆算する戦略的なAIアプローチ</span>
                            </li>
                            <li>
                                <CheckCircle2 className="check-icon" size={24} />
                                <span>複雑な技術をわかりやすい言葉で翻訳するコミュニケーション力</span>
                            </li>
                            <li>
                                <CheckCircle2 className="check-icon" size={24} />
                                <span>導入だけでなく、定着まで伴走するサポート体制</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
