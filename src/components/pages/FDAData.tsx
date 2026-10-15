import React from 'react';
import { Database, Lightbulb, AlertTriangle, RefreshCcw, ExternalLink } from 'lucide-react';

interface DataSource {
    name: string;
    url: string;
    blurb: string;
}

interface DataSection {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    sources: DataSource[];
}

const sections: DataSection[] = [
    {
        icon: Database,
        title: 'Business Intelligence',
        description: 'Programmatic and dashboard access to FDA device datasets — mine adverse events, recalls, and clearances for trend analysis, competitive intelligence, and signal detection.',
        sources: [
            {
                name: 'openFDA API',
                url: 'https://open.fda.gov/',
                blurb: 'REST API over adverse events, recalls, enforcement reports, 510(k)s, and registrations — the backbone of device business intelligence.'
            },
        ]
    },
    {
        icon: Lightbulb,
        title: 'Innovations',
        description: 'Track where device technology is heading: breakthrough designations that expedite review and the 510(k) clearance database of marketed predicates.',
        sources: [
            {
                name: 'Breakthrough Devices Program',
                url: 'https://www.fda.gov/medical-devices/how-study-and-market-your-device/breakthrough-devices-program',
                blurb: 'FDA program expediting review of devices offering more effective treatment of life-threatening or irreversibly debilitating conditions.'
            },
            {
                name: '510(k) Premarket Notification Database',
                url: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm',
                blurb: 'Searchable database of 510(k) clearances — predicates, product codes, and clearance dates.'
            },
        ]
    },
    {
        icon: AlertTriangle,
        title: 'Warnings',
        description: 'FDA enforcement signals: warning letters citing quality-system and cybersecurity deficiencies, and safety communications flagging emerging risks.',
        sources: [
            {
                name: 'Warning Letters',
                url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters',
                blurb: 'Searchable archive of FDA warning letters, including device QSR and cybersecurity observations.'
            },
        ]
    },
    {
        icon: RefreshCcw,
        title: 'Field Actions',
        description: 'What happens after market entry: recalls and adverse events. Essential input for post-market surveillance and CAPA trending.',
        sources: [
            {
                name: 'Medical Device Recalls',
                url: 'https://www.accessdata.fda.gov/scripts/ires/index.cfm',
                blurb: 'Searchable database of device recalls — reason for recall, classification, and corrective action.'
            },
            {
                name: 'MAUDE — Adverse Event Search',
                url: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfMAUDE/search.cfm',
                blurb: 'Manufacturer and User Facility Device Experience database: reports of injuries, malfunctions, and deaths.'
            },
        ]
    },
];

export const FDAData: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">FDA Data</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Business intelligence, innovations, warnings, and field actions — the FDA datasets that power device strategy, surveillance, and compliance.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {sections.map((section, i) => (
                        <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-amber-100 p-3 rounded-xl">
                                    <section.icon className="h-7 w-7 text-amber-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6">{section.description}</p>
                            <div className="space-y-4">
                                {section.sources.map((source, j) => (
                                    <a
                                        key={j}
                                        href={source.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block bg-white p-5 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-sm transition-all group"
                                    >
                                        <div className="flex items-center gap-2 font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                                            {source.name}
                                            <ExternalLink size={14} className="text-slate-400 group-hover:text-amber-600" />
                                        </div>
                                        <p className="text-sm text-slate-600 mt-1">{source.blurb}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
