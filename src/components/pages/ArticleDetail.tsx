import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';

interface ArticleContent {
    title: string;
    date: string;
    author: string;
    image?: string;
    content: React.ReactNode;
}

const articleData: Record<string, ArticleContent> = {
    'ai-safety-challenges': {
        title: 'AI Safety Challenges for Medical Devices: Quality Management, Safety Assurance, and the Technical Limitations of Machine Learning',
        date: '15 Oct 2026',
        author: 'Ravi Dhungel',
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">
                    With over 1,000 FDA-authorized AI/ML-enabled devices, a finalized Predetermined Change Control
                    Plan (PCCP) framework, and a dedicated device classification for machine-learning imaging software
                    (21 CFR 892.2055), artificial intelligence is now a regulated modality in medical devices. Yet the
                    assurance infrastructure of the industry — design controls per the QMSR and ISO 13485, ISO 14971
                    risk management, IEC 62304 software lifecycle processes — was architected for deterministic
                    systems. This article analyzes three loci of strain: quality management, safety assurance, and the
                    intrinsic technical limitations of machine learning.
                </p>

                <p>
                    This article is a companion to <em>"AI To Develop Safe Medical Devices,"</em> published in <em>The
                    Rising Nepal</em> (<a href="https://risingnepaldaily.com/news/53599" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">risingnepaldaily.com/news/53599</a>),
                    which examined the opportunity: generative AI accelerating design prototyping, scaled verification
                    and validation (V&amp;V), automated regulatory compliance, and AI-driven post-market surveillance.
                    Each opportunity entails a corresponding assurance obligation. What follows defines those
                    obligations.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">1. Quality Management Under Strain</h3>
                <p>
                    The QMSR (21 CFR Part 820, effective February 2026) and ISO 13485 §7.3 presuppose a deterministic
                    design cascade: specified inputs → engineered outputs → verification → validation → transfer. ML
                    violates the central presupposition: the design output (trained weights) is not engineered but
                    induced from data via a stochastic optimization process. Device behavior is thus an emergent
                    property of the dataset, loss function, architecture, and training procedure — none of which are
                    captured in a conventional requirements specification.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">1.1 Design controls and the learned-behavior problem</h4>
                <p>
                    For ML-enabled devices, the behavior-determining design inputs are the dataset specification,
                    annotation protocol, architecture selection, training procedure, and performance acceptance
                    criteria. The design history file (DHF) must therefore implement an extended traceability chain
                    beyond the classical requirement → design element → test matrix:
                </p>
                <p className="bg-slate-50 border-l-4 border-blue-500 pl-4 py-3 my-4 italic text-slate-700">
                    Clinical need → data specification → dataset version → annotation protocol →
                    training run (code + hyperparameters + seed) → model version →
                    verification evidence → validation evidence → performance claim
                </p>
                <p>
                    Each link requires documentation, version control, and independent review. Design reviews must
                    integrate data science, clinical, and risk management functions; a review approving a model
                    without examining its training data evaluates nothing.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">1.2 Data as a design input</h4>
                <p>
                    Data determining behavior is data functioning as a design input, subject to design-input controls:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Data collection protocol</strong> (controlled document): inclusion/exclusion criteria,
                        acquisition parameters, de-identification procedures, annotator qualification requirements,
                        disagreement adjudication methodology, and achieved inter-annotator agreement metrics.
                    </li>
                    <li>
                        <strong>Acceptance criteria</strong>: sample-size justification derived from the statistical
                        claims asserted (e.g., positive-case counts required to bound sensitivity confidence
                        intervals), demographic and multi-site coverage mapped to the intended population, and
                        pre-defined rejection gates for corrupted or mislabeled records.
                    </li>
                    <li>
                        <strong>Versioning and lineage</strong>: immutable dataset-version → model-version traceability.
                        Data modifications constitute design changes subject to design change control and risk
                        assessment.
                    </li>
                    <li>
                        <strong>Reference-standard characterization</strong>: ground truth in medical AI is typically
                        expert consensus with a non-zero error rate. The reference standard's limitations and the
                        adjudication process are validation inputs requiring disclosure, not appendices.
                    </li>
                </ul>

                <h4 className="text-xl font-bold mt-6 mb-3">1.3 Verification and validation of probabilistic systems</h4>
                <p>
                    <strong>Verification</strong> (correct construction): training-pipeline code review, run
                    reproducibility (fixed seeds, versioned environments, deterministic operators where feasible), and
                    data-pipeline validation. <strong>Validation</strong> (correct model): statistical inference
                    under strict protocol discipline —
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Independent test sets</strong>, locked prior to training completion, with zero
                        influence on model selection. Train-test leakage nullifies performance claims entirely — a
                        frequent and critical failure mode.
                    </li>
                    <li>
                        <strong>Pre-specified endpoints</strong>: primary performance metrics, acceptance criteria,
                        non-inferiority margins, and subgroup analyses defined in the validation protocol before
                        execution, never fitted post hoc.
                    </li>
                    <li>
                        <strong>Representativeness</strong>: test distribution must match the intended-use population
                        across scanners, demographics, prevalence, and severity spectra. Validation on
                        academic-center data does not transfer to community-clinic deployment.
                    </li>
                    <li>
                        <strong>Interval estimates</strong>: point estimates of sensitivity/specificity are not
                        validation evidence; confidence intervals are, and their width quantifies epistemic
                        uncertainty about the claim itself.
                    </li>
                </ul>

                <h4 className="text-xl font-bold mt-6 mb-3">1.4 Change control: the PCCP in practice</h4>
                <p>
                    The FDA's December 2024 final guidance, <em>Marketing Submission Recommendations for a
                    Predetermined Change Control Plan for AI/ML-Enabled Device Software Functions</em>, structures
                    authorized post-market modification around three elements:
                </p>
                <ol className="list-decimal pl-6 space-y-4 my-6">
                    <li>
                        <strong>Detailed Description of Modifications</strong> (SaMD pre-specifications): bounded,
                        enumerated anticipated changes (e.g., retraining on additional scanner manufacturers'
                        data; threshold adjustment within 0.65–0.80). Open-ended "performance improvement" is not a
                        pre-specification.
                    </li>
                    <li>
                        <strong>Modification Protocol</strong> (algorithm change protocol): the reproducible,
                        auditable methodology for implementing each change — data governance, retraining procedures,
                        performance evaluation, and verification activities, anchored in QMSR design controls.
                    </li>
                    <li>
                        <strong>Impact Assessment</strong>: structured analysis of safety/effectiveness impact per
                        modification, explicitly addressing performance drift, dataset shift, and subpopulation
                        effects.
                    </li>
                </ol>
                <p>
                    The authorized PCCP becomes part of the marketing authorization; in-scope modifications ship
                    without new submissions, while out-of-scope changes (intended-use modifications, novel clinical
                    claims, new risk introduction) require a new 510(k) or PMA supplement. Predominant 2026
                    deficiencies: protocols specifying <em>what</em> without <em>how</em>, absent modification
                    boundaries, and no validation plan benchmarking updated versions against the cleared performance
                    baseline. Unauthorized out-of-plan implementation constitutes adulteration exposure.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">1.5 IEC 62304 and the software-item problem</h4>
                <p>
                    IEC 62304's verification edifice presupposes behavior fully determined by reviewable, testable
                    code. ML behavior is determined by code <em>plus</em> data <em>plus</em> training stochasticity;
                    weights are artifacts no code review can evaluate. Pre-trained and foundation models present the
                    sharper case: under 62304 they constitute SOUP (Software of Unknown Provenance), yet clause
                    8.1.2's requirements for documented requirements, architecture, and verification are seldom
                    satisfiable for such models. The defensible treatment is high-risk SOUP classification with
                    compensatory validation — extensive independent testing on manufacturer-curated data, documented
                    limitations, and architectural isolation containing failure-mode propagation.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">1.6 Supplier controls for the ML supply chain</h4>
                <p>
                    Annotation vendors, data brokers, and cloud training platforms are suppliers under QMSR §820.50 /
                    ISO 13485 §7.4, requiring qualification, contractual data-quality and handling requirements, and
                    ongoing monitoring. Annotator-workforce instability at a labeling vendor is a direct threat to
                    design-input integrity.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">2. Safety Assurance: ISO 14971 Meets Machine Learning</h3>
                <p>
                    The ISO 14971 risk management process — hazard identification, risk estimation and evaluation,
                    control implementation, effectiveness verification, production monitoring — requires expansion,
                    not replacement, for ML-enabled devices.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">2.1 A third category of failure</h4>
                <p>
                    Extending the argument of my cybersecurity–safety linkage analysis — that safety risk
                    (stochastic, frequentist) and cybersecurity risk (adversarial, intentional, non-probabilistic)
                    demand distinct yet coordinated processes — ML introduces a <strong>third failure
                    category</strong>, reducible to neither:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        Not <strong>random failure</strong>: the model does not degrade stochastically. Identical
                        inputs deterministically reproduce identical erroneous outputs; classical failure-rate
                        estimation from field returns is inapplicable.
                    </li>
                    <li>
                        Not <strong>attack</strong>: misclassification of an underrepresented presentation involves no
                        adversary. The model executes its design faithfully; the learned mapping itself is deficient
                        for the case at hand.
                    </li>
                </ul>
                <p>
                    ML failure is <strong>statistical and systematic</strong> — nominal aggregate generalization
                    coexisting with concentrated failures on identifiable subpopulations and edge cases. This
                    necessitates a dedicated risk vocabulary: performance bounds, subgroup guarantees, operating
                    envelopes, and monitoring thresholds, rather than hardware-reliability probabilities or
                    exploitability judgments forced onto model behavior.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">2.2 Expanded hazard taxonomy</h4>
                <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-slate-200 text-left text-sm">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-2 border border-slate-200 font-bold">Hazard</th>
                                <th className="px-4 py-2 border border-slate-200 font-bold">Mechanism</th>
                                <th className="px-4 py-2 border border-slate-200 font-bold">Harm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Misclassification (false negatives / positives)</td>
                                <td className="px-4 py-2 border border-slate-200">Statistical error on out-of-sample inputs</td>
                                <td className="px-4 py-2 border border-slate-200">Missed diagnosis; unwarranted invasive intervention</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Automation bias</td>
                                <td className="px-4 py-2 border border-slate-200">Operator deference suppressing independent verification</td>
                                <td className="px-4 py-2 border border-slate-200">Model errors propagate into clinical decisions unchecked</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Distributional shift</td>
                                <td className="px-4 py-2 border border-slate-200">Deployment distribution diverges from training distribution</td>
                                <td className="px-4 py-2 border border-slate-200">Silent in-field performance degradation</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Opacity</td>
                                <td className="px-4 py-2 border border-slate-200">Absence of causal decision account</td>
                                <td className="px-4 py-2 border border-slate-200">Hazardous states unforeseeable and uninvestigable</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Reference-standard error</td>
                                <td className="px-4 py-2 border border-slate-200">Imperfect ground truth; annotator discordance</td>
                                <td className="px-4 py-2 border border-slate-200">Model optimizes toward an incorrect target</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Feedback loops</td>
                                <td className="px-4 py-2 border border-slate-200">Model outputs contaminate subsequent training data</td>
                                <td className="px-4 py-2 border border-slate-200">Bias amplification; progressive degradation</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Miscalibration</td>
                                <td className="px-4 py-2 border border-slate-200">Overconfident erroneous outputs</td>
                                <td className="px-4 py-2 border border-slate-200">No reliable abstention signal; errors present as certainties</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Adversarial input</td>
                                <td className="px-4 py-2 border border-slate-200">Perturbation-crafted misclassification</td>
                                <td className="px-4 py-2 border border-slate-200">Targeted errors at the safety–security boundary</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 className="text-xl font-bold mt-6 mb-3">2.3 Risk controls for ML hazards</h4>
                <p>
                    The ISO 14971 control hierarchy applies directly once hazards are correctly identified:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Inherent safety by design</strong>: enforced operating envelopes — input-validity
                        screening rejecting out-of-distribution data rather than inferring over it; confidence gating
                        suppressing sub-threshold outputs; graceful degradation to defined safe states (e.g.,
                        "indeterminate — refer to clinician") in place of confident error.
                    </li>
                    <li>
                        <strong>Protective measures</strong>: deliberately architected human oversight.
                        Human-in-the-loop (advisory AI, human decides) preserves accountability only where workflows
                        genuinely permit dissent; human-on-the-loop (supervised autonomy with override) requires
                        anomaly-salient interfaces. Nominal "clinician review" checkboxes are not controls.
                    </li>
                    <li>
                        <strong>Information for safety</strong>: labeling specifying the indicated population, known
                        limitations, subgroup-stratified performance, and advisory status of outputs — with residual
                        statistical risk disclosed quantitatively, not minimized in marketing language.
                    </li>
                </ul>

                <h4 className="text-xl font-bold mt-6 mb-3">2.4 Usability: IEC 62366-1 and the joint cognitive system</h4>
                <p>
                    A dominant fraction of AI-device risk is use-related rather than algorithmic. Automation bias is a
                    use error: clinician, device, and interface constitute a joint cognitive system, and summative
                    usability validation must evaluate that system — neither the operator nor the model in isolation.
                    Validation must interrogate trust calibration: does the interface convey uncertainty or only
                    conclusions? Can outputs be interrogated and overridden without workflow friction? Does extended
                    use induce complacency under representative time pressure? An interface eliciting over-trust makes
                    the use error itself the hazard, unmitigated by any model-accuracy figure.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">2.5 The ground-truth problem</h4>
                <p>
                    Clinical evaluation rests on reference standards with intrinsic uncertainty — inter-reader
                    discordance, unavailable pathology, consensus-panel biases. Validation against noisy labels
                    measures accuracy-against-noise. Protocols should report reference-standard inter-reader
                    agreement, employ adjudicated panels where feasible, and characterize reference-unreliable cases.
                    A model "exceeding expert performance" on benchmarks derived from those experts' labels
                    demonstrates consistency, not superiority — a distinction the clinical evaluation report must
                    preserve.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">3. Technical Limitations Bounding Assurance</h3>
                <p>
                    Beyond process discipline, ML exhibits intrinsic limitations constraining achievable assurance. A
                    credible safety case enumerates them.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">3.1 Generalization and distributional shift</h4>
                <p>
                    Validity holds only insofar as the deployment distribution matches the training distribution —
                    an equality never exact in practice. Covariate shift (scanner manufacturers, acquisition
                    protocols), concept drift (evolving practice patterns, prevalence changes), and site-specific
                    workflow effects all displace the target. External validation on held-out sites, without
                    tuning access, is the minimum credible generalization evidence.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">3.2 Subgroup performance and bias</h4>
                <p>
                    Underrepresented subpopulations — stratified by race, sex, age, geography, disease severity —
                    systematically receive inferior model performance. FDA's 2023 draft guidance explicitly requires
                    accounting for these strata in training and validation data. For diagnostic devices, performance
                    disparity is a safety issue concentrated on identifiable patient cohorts, not a fairness
                    footnote. Subgroup metrics must be pre-specified, measured, disclosed, and, where deficient,
                    must constrain the indicated population.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">3.3 Adversarial robustness</h4>
                <p>
                    Imperceptible input perturbations can invert model outputs at high reported confidence — a gap
                    no clean test-set accuracy metric closes. Adversarial evaluation and corrupted-input stress
                    testing belong in verification, with results filed in the risk management file. This fragility is
                    precisely the safety–security interface: identical mechanism, accidental or deliberate
                    exploitation.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">3.4 Opacity and explanation limits</h4>
                <p>
                    Post-hoc attributions (saliency maps, feature attributions, surrogates) approximate rather than
                    reveal model behavior, and can mislead — highlighting plausible regions while decisions key on
                    artifacts. Explanations may aid debugging and operator trust but constitute no verification
                    evidence; safety cases premised on "correct reasoning" inferred from attributions rest on sand.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">3.5 Calibration</h4>
                <p>
                    A model reporting 90% confidence should be correct at approximately 90% frequency; deep models
                    are characteristically miscalibrated toward overconfidence. Calibration is measurable
                    (reliability diagrams, expected calibration error) and improvable (temperature scaling, Bayesian
                    approximations, ensembling), and should be an acceptance criterion — confidence gating as a risk
                    control is vacuous if confidence values are uncalibrated.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">3.6 Generative AI: confabulation as hazard</h4>
                <p>
                    Large language and vision-language models generate fluent, confident, clinically false outputs —
                    fabricated findings, invented citations, plausible-but-wrong summaries. In device contexts,
                    confabulation is a hazard requiring explicit controls. Compounding factors: prompt sensitivity
                    (minor input variations yielding unpredictable output shifts) and the unsolved evaluation problem
                    for open-ended generation. Prudent containment is architectural: restrict generative components
                    to bounded tasks (classification, extraction, source-grounded summarization) and validate the
                    constrained behavior, never the model's general capabilities.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">3.7 On-device constraints</h4>
                <p>
                    Embedded deployment necessitates quantization, pruning, or distillation — each a model
                    modification requiring re-validation of the deployed artifact. Lab-model performance does not
                    transfer by assumption. Hardware-specific validation (target SoC, memory constraints, thermal
                    envelope) is mandatory, and framework/runtime updates are software changes under change control.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">3.8 Post-market drift and continuous monitoring</h4>
                <p>
                    Practice evolution, sensor aging, and population shifts degrade models over time. FDA's Total
                    Product Lifecycle (TPLC) framework positions market authorization as a midpoint: real-world
                    performance monitoring functions as continuous validation. This demands pre-specified metrics,
                    investigation thresholds, and defined responses — PCCP-governed retraining, version rollback,
                    labeling updates, or field action. Monitoring data pipelines are device components requiring
                    validation; post-market surveillance for AI devices is the validation protocol still running.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3">3.9 Cybersecurity interplay</h4>
                <p>
                    AI devices inherit the full cybersecurity burden plus ML-specific attack surfaces: training-time
                    data poisoning, model extraction and inversion (catastrophic for PHI-trained models), and prompt
                    injection against LLM-based functions. FDA's September 2023 cybersecurity guidance applies in
                    full — ML-pipeline threat modeling, SBOM coverage of frameworks and model artifacts, and ML
                    supply-chain vulnerability management. Security and safety analyses remain coordinated but
                    distinct per the linkage model: an adversarial input is simultaneously a cybersecurity event and
                    a safety hazard, and must be dispositioned in both files without mathematical fusion.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">4. FDA AI Guidance: Key References</h3>
                <p>
                    FDA guidance is nonbinding but predictive of review behavior. Essential reading:
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 my-6">
                    <ul className="space-y-4">
                        <li>
                            <strong>AI/ML-Based SaMD Action Plan (January 2021)</strong> — foundational TPLC vision:
                            Good Machine Learning Practice (GMLP), transparency, bias/robustness evaluation, and
                            real-world performance monitoring.
                        </li>
                        <li>
                            <strong>Marketing Submission Recommendations for a PCCP for AI/ML-Enabled Device Software
                            Functions (final, December 2024)</strong> — the PCCP framework: pre-specified
                            modifications, modification protocol, impact assessment. Prerequisite reading for any
                            submission involving learning or updatable models.
                        </li>
                        <li>
                            <strong>Draft guidance on AI-enabled devices (January 2025)</strong> — first guidance
                            spanning the full lifecycle (design through postmarket monitoring), issued as authorized
                            AI/ML devices exceeded 1,000.
                        </li>
                        <li>
                            <strong>21 CFR 892.2055 (effective June 17, 2026)</strong> — Class II classification with
                            special controls for radiological ML-based quantitative imaging software incorporating a
                            PCCP: design V&amp;V, post-clearance-change risk management, PCCP-specific labeling
                            including version history.
                        </li>
                        <li>
                            <strong>QMSR, 21 CFR Part 820 (effective February 2026)</strong> — modernized quality
                            system regulation (ISO 13485-aligned) housing PCCP modification protocols as design
                            change control.
                        </li>
                    </ul>
                    <p className="mt-4 text-sm">
                        FDA maintains a living AI/ML-device index on fda.gov (search "Artificial Intelligence and
                        Machine Learning in Software as a Medical Device"). For novel AI devices, a pre-submission
                        (Q-Sub) meeting aligning the validation plan and PCCP scope before pivotal work begins is
                        the highest-leverage schedule investment available.
                    </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">5. The Companion View: From Opportunity to Assurance</h3>
                <p>
                    Each opportunity identified in the <em>Rising Nepal</em> piece maps to an assurance obligation
                    defined above:
                </p>
                <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-slate-200 text-left text-sm">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-2 border border-slate-200 font-bold">Opportunity (Rising Nepal)</th>
                                <th className="px-4 py-2 border border-slate-200 font-bold">Assurance obligation (this article)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Rapid AI-generated design prototypes</td>
                                <td className="px-4 py-2 border border-slate-200">Design-control traceability of AI-assisted decisions; outputs valid only insofar as underlying data and assumptions are (§1.1–1.2)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">V&amp;V at scale</td>
                                <td className="px-4 py-2 border border-slate-200">Statistical validation discipline — locked test sets, pre-specified endpoints, zero leakage — lest scale merely accelerate confident error (§1.3)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Automated regulatory compliance</td>
                                <td className="px-4 py-2 border border-slate-200">Automation cannot generate underlying evidence: PCCPs, hazard analyses, and usability validation must exist before they can be documented (§1.4, §2)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Continuous AI post-market surveillance</td>
                                <td className="px-4 py-2 border border-slate-200">Monitoring pipelines are validated device components; metrics, thresholds, and responses pre-specified (§3.8)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Anatomy-personalized devices</td>
                                <td className="px-4 py-2 border border-slate-200">Patient-specific adaptation is a design change: PCCP-bounded, with subgroup validation spanning the personalization range (§1.4, §3.2)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    The combined position: AI can transform safe-device development and monitoring <em>if</em> the
                    quality system, hazard analysis, and validation discipline evolve to govern AI-generated
                    artifacts. Velocity without assurance is accelerated risk.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">6. What Good Looks Like</h3>
                <ol className="list-decimal pl-6 space-y-3 my-6">
                    <li><strong>Data as design artifact</strong> — specified, versioned, traceable, with acceptance criteria and dataset-to-model lineage in the DHF.</li>
                    <li><strong>Extended traceability</strong> — clinical need → data → training → model → evidence → claim, fully documented.</li>
                    <li><strong>Statistical validation discipline</strong> — locked independent test sets, pre-specified endpoints/subgroups, interval estimates, zero leakage.</li>
                    <li><strong>Expanded hazard analysis</strong> — ISO 14971 identification covering model error, automation bias, shift, opacity, miscalibration.</li>
                    <li><strong>Matched controls</strong> — operating envelopes, confidence gating, validated oversight architectures, quantitative residual-risk labeling.</li>
                    <li><strong>Joint-system usability validation</strong> — operator-plus-AI evaluated for trust calibration per IEC 62366-1.</li>
                    <li><strong>Pre-specified change</strong> — PCCP with modification boundaries, protocols, and impact assessment established pre-market.</li>
                    <li><strong>Continuous monitoring</strong> — real-world performance metrics, thresholds, and defined responses; validated monitoring pipelines.</li>
                    <li><strong>Measured calibration</strong> — calibration as acceptance criterion, making abstention a reliable output.</li>
                    <li><strong>Coordinated security analysis</strong> — ML-pipeline threat modeling, SBOM coverage of models/frameworks, safety–security linkage without fusion.</li>
                </ol>

                <h3 className="text-2xl font-bold mt-8 mb-4">7. Conclusion</h3>
                <p>
                    The <em>Rising Nepal</em> vision — generative AI accelerating development of safe, personalized,
                    continuously monitored devices — is realizable only with commensurate assurance discipline. Trust
                    is not an algorithmic property but a quality-system output: data governed as design input, hazard
                    analysis extended to model behavior, change pre-specified, uncertainty calibrated, performance
                    monitored across the device lifetime. AI safety in medical devices is, fundamentally, a quality
                    management problem — more demanding than its deterministic predecessor, bounded by genuine
                    technical limits, and solvable under honest accounting of what the technology can and cannot
                    assure.
                </p>
            </>
        )
    },
    'cyber-safety-dilemma': {
        title: 'Transposing Cybersecurity-to-Safety Risks in Medical Devices: The Dilemma of Mathematical Conversion vs. Judgmental Linkage',
        date: '24 Apr 2026',
        author: 'Ravi Dhungel',
        image: '/images/articles/cyber-safety-viz.png',
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">
                    ISO 14971 safety risk is grounded in classical probability theory, while cybersecurity risk operates under structurally different assumptions. 
                    This article explores why direct mathematical transposition fails and proposes a linkage-based integration model.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">1. Mathematical Incompatibility of the Two Domains</h3>
                <p>
                    ISO 14971 safety risk is defined as: <strong>R = P(harm | hazardous situation) × Severity</strong>. 
                    Here, P is a frequentist or credence-based probability derived from repeatable events under relatively stable conditions.
                </p>
                <p>
                    Cybersecurity risk, however, focuses on <strong>exploitability</strong>, which is not a random variable. 
                    Threat actors are adaptive, goal-directed, and context-sensitive. Assigning numeric likelihoods to exploitability produces "pseudo-mathematics"—the appearance of rigor without formal validity.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">2. Failure Modes of Direct Transposition</h3>
                <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-slate-200 text-left text-sm">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-2 border border-slate-200 font-bold">Approach</th>
                                <th className="px-4 py-2 border border-slate-200 font-bold">Failure Mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Map CVSS base score → safety P category</td>
                                <td className="px-4 py-2 border border-slate-200">CVSS is ordinal and context-dependent; cardinality assumptions are invalid</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Assign exploitability → P(attack) in risk matrix</td>
                                <td className="px-4 py-2 border border-slate-200">Treats a judgment variable as a frequentist probability; no justifiable distribution</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Composite risk score (cyber + safety)</td>
                                <td className="px-4 py-2 border border-slate-200">Mixes non-probabilistic and probabilistic quantities; violates measure theory</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Bayesian prior on attacker intent</td>
                                <td className="px-4 py-2 border border-slate-200">Requires stable base rates; adaptive adversaries invalidate stationarity assumption</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">3. Limits of Advanced Quantitative Techniques</h3>
                <p>
                    Techniques like Monte Carlo simulation and Bayesian networks are often proposed as bridges, but they fail because they require valid input distributions which, in cybersecurity, are assumed rather than derived.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Monte Carlo:</strong> Garbage-in-garbage-out applies directly when input distributions are guessed.</li>
                    <li><strong>Bayesian inference:</strong> Posterior probabilities are only meaningful when the prior is over a stable probability space, not an opinion about attacker capability.</li>
                    <li><strong>Expert judgment:</strong> Calibrated qualitative judgments (high/medium/low) are appropriate; unitless decimal values are not.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">4. Linkage-Based Integration Model</h3>
                <p>
                    The normative solution, as represented in AAMI TIR57, is parallel, coordinated processes with structured information handoffs, not mathematical fusion. The correct integration follows a conditional structure:
                </p>
                <ol className="list-decimal pl-6 space-y-4 my-6">
                    <li>
                        <strong>Cybersecurity analysis:</strong> Characterize the threat and adverse impact using non-probabilistic reasoning. 
                        <em>Output: "unauthorized modification of infusion rate parameter via unencrypted Bluetooth command channel is credible."</em>
                    </li>
                    <li>
                        <strong>Causal safety linkage:</strong> Expert judgment determines if the cybersecurity condition precipitates a hazardous situation. 
                        <p className="mt-2 text-sm text-slate-600">
                            Linking <strong>Threat IDs</strong> with <strong>Hazard IDs</strong> provides a structured causal bridge between the two methodologies, as identified in AAMI TIR57. This mapping explicitly shows the relationship between security and safety risks, though practitioners should avoid model overfitting since Threat IDs are often specific subsets of broader Hazard IDs.
                        </p>
                        <em>Output: "if the above condition is realized, incorrect dose delivery resulting in over-infusion is a foreseeable hazardous situation."</em>
                    </li>
                </ol>

                <h3 className="text-2xl font-bold mt-8 mb-4">5. Conclusion</h3>
                <p>
                    Cybersecurity and safety risk management answer different questions under different mathematical assumptions. 
                    Attempts to convert exploitability into safety probability introduce formal invalidity. 
                    The linkage-based model preserves both domains' integrity through causal reasoning rather than numerical conversion.
                </p>
            </>
        )
    },
    'evolving-risk': {
        title: 'Evolving Risk Paradigms: Why Medical Device Security Demands a New Approach',
        date: '02 Nov 2025',
        author: 'Ravi Dhungel',
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">
                    The convergence of digital technologies and clinical functionality in modern medical devices has necessitated a paradigm shift in how risk is assessed and managed.
                </p>
                <p>
                    Historically, safety and security risk assessments have operated in parallel but separate domains. 
                    Safety focused on random component failures and foreseeable misuse, while security focused on intentional adversarial actions.
                </p>
                <h3>The Challenge</h3>
                <p>
                    In the modern connected ecosystem, a security vulnerability can directly lead to a safety hazard. 
                    However, the probabilistic models used in ISO 14971 do not directly translate to the intentional, non-random nature of cyber attacks.
                </p>
            </>
        )
    },
    'post-market-surveillance': {
        title: 'Understanding Post-Market Surveillance',
        date: '15 Jan 2025',
        author: 'Ravi Dhungel',
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">
                    Key strategies for maintaining security posture after device deployment. 
                    Continuous monitoring and vulnerability management are critical.
                </p>
                <p>
                    Post-market surveillance is not just a regulatory requirement; it's a vital security function. 
                    As new vulnerabilities are discovered in the wild (0-days, library vulnerabilities like Log4j), manufacturers must have robust processes to assess and mitigate them.
                </p>
            </>
        )
    },
    'estar-cybersecurity-510k': {
        title: 'eSTAR Cybersecurity Deliverables for 510(k) Submissions: The Complete List',
        date: '16 Oct 2026',
        author: 'Ravi Dhungel',
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">
                    Since October 2023, FDA only accepts 510(k)s through eSTAR — and the eSTAR cybersecurity
                    section is prescriptive. Here is every cybersecurity deliverable FDA expects, drawn directly
                    from the current final guidance (February 2026), plus which ones carry statutory weight
                    under Section 524B.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">1. Why eSTAR Changed the Submission Game</h3>
                <p>
                    Before eSTAR, cybersecurity documentation lived wherever the sponsor chose to put it —
                    scattered across software descriptions, risk files, and labeling. eSTAR replaced that freedom
                    with a dedicated Cybersecurity section containing named attachment slots. The consequence is
                    procedural: FDA now runs a <em>technical screening</em> that checks for the presence and
                    formatting of these artifacts before substantive review begins. A missing or malformed
                    attachment is a refuse-to-accept risk, not a deficiency you negotiate later.
                </p>
                <p>
                    The attachment names in eSTAR mirror the documentation recommendations in FDA's final guidance
                    <em> "Cybersecurity in Medical Devices: Quality Management System Considerations and Content of
                    Premarket Submissions"</em> (February 2026 — the current version, which superseded the June 2025
                    edition as a QMSR-alignment update). Appendix 4, Table 1 of that guidance is the authoritative
                    list. What follows is that list, organized the way a submission team actually builds it.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">2. The Statutory Floor: Section 524B</h3>
                <p>
                    Not all fourteen items carry equal weight. Section 524B of the FD&amp;C Act (added December 2022,
                    effective March 2023) makes a subset <em>mandatory</em> for devices meeting the "cyber device"
                    definition — and that explicitly includes 510(k)s (original, special, and abbreviated). The
                    statutory must-haves:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>SBOM</strong> — machine-readable Software Bill of Materials covering commercial, open-source, and off-the-shelf components;</li>
                    <li><strong>Vulnerability monitoring and remediation plans</strong> — processes to monitor, identify, and address postmarket vulnerabilities in a reasonable time, including coordinated vulnerability disclosure;</li>
                    <li><strong>Secure development processes</strong> — documented processes providing reasonable assurance the device and related systems are cybersecure;</li>
                    <li><strong>Updates and patches</strong> — making postmarket updates available on a justified regular cycle, and as soon as possible out-of-cycle for critical vulnerabilities.</li>
                </ul>
                <p>
                    Everything else on the list is guidance-recommended rather than statutory — but in practice,
                    reviewers treat the full set as expected for any device with cybersecurity risk.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">3. The Fourteen Deliverables</h3>

                <h4 className="text-xl font-bold mt-6 mb-3">Risk management core</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Cybersecurity Risk Management Report</strong> — the overarching summary: traceability across all security activities, residual-risk justifications, deviations from the plan. <Link to="/templates/risk-management-plan" className="text-blue-600 hover:text-blue-700 underline">Template</Link></li>
                    <li><strong>Threat Model</strong> (may include architecture views) — structured analysis of how the device system could be compromised: supply chain, manufacturing, deployment, interoperation, maintenance, and decommissioning. State your assumptions and methodology rationale. <Link to="/templates/threat-model" className="text-blue-600 hover:text-blue-700 underline">Template</Link></li>
                    <li><strong>Cybersecurity Risk Assessment</strong> — threat/vulnerability pairs scored pre- and post-mitigation, with acceptance criteria and the method for transferring security risks into the ISO 14971 safety process. <Link to="/templates/risk-assessment" className="text-blue-600 hover:text-blue-700 underline">Template</Link></li>
                </ul>

                <h4 className="text-xl font-bold mt-6 mb-3">Software transparency</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>SBOM</strong> — SPDX or CycloneDX JSON with NTIA baseline attributes; statutory for cyber devices. <Link to="/templates/sbom-guide" className="text-blue-600 hover:text-blue-700 underline">Template</Link></li>
                    <li><strong>Vulnerability Assessment &amp; Software Support</strong> — per-component support status, end-of-support dates, and known vulnerabilities including CISA KEV entries, each with discovery method, impact assessment, and controls. <Link to="/templates/vulnerability-assessment" className="text-blue-600 hover:text-blue-700 underline">Template</Link></li>
                    <li><strong>Unresolved Anomalies Assessment</strong> — known software defects at submission, each evaluated for security impact (CWE mapping), with criteria and rationale for addressing vs. deferring. <Link to="/templates/unresolved-anomalies" className="text-blue-600 hover:text-blue-700 underline">Template</Link></li>
                </ul>

                <h4 className="text-xl font-bold mt-6 mb-3">Engineering evidence</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Traceability</strong> — the chain linking threats → requirements → controls → tests → results. Reviewers follow this chain; breaks in it are findings. <Link to="/templates/traceability-matrix" className="text-blue-600 hover:text-blue-700 underline">Template</Link></li>
                    <li><strong>Measures &amp; Metrics</strong> — security metrics tracked through development (remediation times, scan coverage, SBOM completeness). <Link to="/templates/security-metrics" className="text-blue-600 hover:text-blue-700 underline">Template</Link></li>
                    <li><strong>Architecture Views</strong> — at minimum: global system view, multi-patient harm view, updateability/patchability view, and security use case views for safety-relevant functionality. Diagrams plus explanatory text. <Link to="/templates/architecture-views" className="text-blue-600 hover:text-blue-700 underline">Template</Link></li>
                    <li><strong>Requirements</strong> — security design inputs, requirements, and acceptance criteria across the control categories (authentication, authorization, cryptography, integrity, confidentiality, logging, resiliency, updatability). <Link to="/templates/security-requirements" className="text-blue-600 hover:text-blue-700 underline">Template</Link></li>
                    <li><strong>Testing</strong> — requirements testing, threat-mitigation testing, vulnerability testing (fuzz, attack surface, SCA, SAST/DAST, credential scans), and penetration testing with tester independence documented. <Link to="/templates/testing-report" className="text-blue-600 hover:text-blue-700 underline">Template</Link></li>
                </ul>

                <h4 className="text-xl font-bold mt-6 mb-3">Transparency and lifecycle</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Labeling</strong> — user-facing cybersecurity information: network interfaces, secure configuration, update procedures, end-of-support. <Link to="/templates/labeling" className="text-blue-600 hover:text-blue-700 underline">Template</Link></li>
                    <li><strong>Cybersecurity Management Plans</strong> — postmarket vulnerability monitoring, coordinated disclosure, patch timelines, and customer communication. Statutory for cyber devices. <Link to="/templates/management-plan" className="text-blue-600 hover:text-blue-700 underline">Template</Link></li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">4. No 510(k) Carve-Out — It Scales With Risk</h3>
                <p>
                    A common misconception: that the full list applies to PMAs while 510(k)s get a lighter version.
                    The guidance is explicit — each documentation element "is recommended for all premarket
                    submissions for devices with potential cybersecurity risks." What scales is not the submission
                    type but the device's cybersecurity risk: a simple non-connected device needs only limited
                    documentation; a networked, wireless device needs the full set. The "Recommended" vs. "could be
                    helpful" distinction in FDA's table applies only to IDE submissions, not to 510(k) vs. PMA.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">5. From List to Submission</h3>
                <p>
                    Knowing the fourteen items is the easy part; producing them with the traceability reviewers
                    expect is the work. To make that concrete, each deliverable above links to a fill-in template
                    in our <Link to="/templates" className="text-blue-600 hover:text-blue-700 underline">Templates section</Link> —
                    structured around the FDA guidance sections, with per-section instructions on what reviewers
                    look for. Start with the threat model and risk assessment: everything else traces back to them.
                </p>
                <p className="bg-slate-50 border-l-4 border-blue-500 pl-4 py-3 my-4 italic text-slate-700">
                    Reference: FDA final guidance "Cybersecurity in Medical Devices: Quality Management System
                    Considerations and Content of Premarket Submissions" (February 2026), Appendix 4, Table 1.
                    Verify section references against the current guidance before submission — eSTAR attachment
                    names track the guidance.
                </p>
            </>
        )
    }
};

export const ArticleDetail: React.FC = () => {
    const { id } = useParams();
    const article = articleData[id || ''] || {
        title: 'Article Not Found',
        date: 'N/A',
        author: 'Unknown',
        content: <p>The article you are looking for could not be found.</p>
    };

    return (
        <div className="bg-white py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Articles
                </Link>

                <article>
                    <header className="mb-8">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                            <span className="flex items-center gap-1"><Calendar size={16} /> {article.date}</span>
                            <span className="flex items-center gap-1"><User size={16} /> {article.author}</span>
                        </div>
                        <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            {article.title}
                        </h1>
                        {article.image && (
                            <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                                <img src={article.image} alt={article.title} className="w-full h-auto" />
                            </div>
                        )}
                    </header>

                    <div className="prose prose-lg prose-slate max-w-none">
                        {article.content}
                    </div>

                    <footer className="mt-16 pt-8 border-t border-slate-200">
                        <p className="text-sm text-slate-500 italic">
                            All the views expressed in the article are personal and do not reflect the views of my previous or current employer.
                        </p>
                    </footer>
                </article>
            </div>
        </div>
    );
};
