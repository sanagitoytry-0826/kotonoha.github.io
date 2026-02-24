import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, LineChart, ShieldCheck } from 'lucide-react';
import './Services.css';

const services = [
    {
        id: 1,
        title: 'AI導入戦略策定',
        description: '貴社のビジネスモデルに最適なAI技術を選定し、導入から運用までのロードマップを策定します。無駄のない投資で最大のリターンを狙います。',
        icon: <BrainCircuit size={32} />
    },
    {
        id: 2,
        title: '業務プロセスの最適化',
        description: 'AIとRPAを組み合わせることで、属人的な業務を自動化・効率化。社員が本来注力すべき「創造的な仕事」に向き合える環境を構築します。',
        icon: <LineChart size={32} />
    },
    {
        id: 3,
        title: 'データ活用とガバナンス',
        description: '社内に眠るデータを価値に変える分析基盤の構築と、AI利用に伴うセキュリティや倫理面でのガバナンス体制構築を支援します。',
        icon: <ShieldCheck size={32} />
    }
];

const Services = () => {
    return (
        <section className="section services-section" id="services">
            <div className="container">
                <h2 className="section-title">提供サービス</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
