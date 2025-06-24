import React from 'react';

const eulaHtml = `
  <div class="space-y-6 text-gray-300">
    <section>
      <h2 class="text-2xl font-semibold text-cyan-400 mb-4">1. APPLICATION OF AGREEMENT</h2>
      <ol class="list-decimal list-inside space-y-3 pl-4">
        <li>This Agreement applies to your use of the Software (as that term is defined below). By downloading, installing, accessing and/or using the Software:
          <ol class="list-decimal list-inside space-y-2 pl-6 mt-2">
            <li>you agree to this Agreement; and</li>
            <li>where you download, install and/or use the Software on behalf of another person (e.g. a company), you confirm that you are authorized to, and do in fact, agree to this Agreement on that person’s behalf and that, by agreeing to this Agreement on that person’s behalf, that person is bound by this Agreement.</li>
          </ol>
        </li>
        <li>If you do not agree to this Agreement, you must not download, install, access and/or use the Software.</li>
      </ol>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-cyan-400 mb-4">2. INTERPRETATION</h2>
        <p>In this Agreement: <i>Documentation</i> means the user and technical documentation for the Software provided by Sandfly, and includes any update of that documentation. <i>Fees</i> means the fees Sandfly has quoted to you or otherwise agreed in writing between you and Sandfly, as may be updated from time to time in accordance with clause 7.6. <i>Intellectual Property Rights</i> includes copyright, and all worldwide rights conferred under statute, common law or equity in relation to inventions (including patents), registered and unregistered trade marks and designs, circuit layouts, data and databases, confidential information, know-how, and all other rights resulting from intellectual activity. <i>Intellectual Property</i> has a consistent meaning, and includes any enhancement, modification or derivative work of the Intellectual Property. <i>Sandfly</i> means Sandfly Security Limited, company number 6291750. <i>Sales Tax</i> means goods and services tax, value added tax, sales tax or equivalent tax payable under any applicable law. <i>Software</i> means the security software known as <i>Sandfly</i>, including any Update. <i>Support Services</i> means the support services described in clauses 6.2 to 6.4. <i>Update</i> means a new version of the Software released or made available to you by Sandfly. <i>You or your</i> means you or, if clause 1.1.2 applies, both you and the other person on whose behalf you are acting.</p>
    </section>

    <section>
        <h2 class="text-2xl font-semibold text-cyan-400 mb-4">3. LICENSE</h2>
        <p>Sandfly grants to you, and you accept, a non-exclusive and non-transferable license for the duration of this Agreement to use the Software and the Documentation solely for your internal business purposes on the terms and conditions of this Agreement.</p>
    </section>

    <section>
        <h2 class="text-2xl font-semibold text-cyan-400 mb-4">4. LICENSE CONDITIONS</h2>
        <p>You must:</p>
        <ol class="list-decimal list-inside space-y-3 pl-4 mt-2">
            <li>use the Software and the Documentation for lawful purposes only;</li>
            <li>must not copy (except making a single copy for your own back-up purposes), reproduce, translate, decompile, reverse-engineer, resell, modify, vary, sub-license or otherwise deal in the Software or the Documentation except:
                <ol class="list-decimal list-inside space-y-2 pl-6 mt-2">
                    <li>as expressly provided for in this Agreement; or</li>
                    <li>to the extent expressly permitted by law;</li>
                </ol>
            </li>
            <li>ensure the Software and the Documentation are protected at all times from misuse, damage, destruction or any form of unauthorized use, copying or disclosure;</li>
            <li>maintain all proprietary notices on the Software and the Documentation;</li>
            <li>not transfer, assign or otherwise deal with or grant a security interest in the Software, the Documentation or your rights under this Agreement;</li>
            <li>not challenge Sandfly’s ownership of (including the Intellectual Property Rights in) the Software or the Documentation; and</li>
            <li>notify Sandfly in writing immediately after you become aware of any circumstance which may suggest that any person may have unauthorized knowledge, possession or use of the Software or the Documentation.</li>
        </ol>
    </section>

    <section>
        <h2 class="text-2xl font-semibold text-cyan-400 mb-4">5. TRIAL PERIOD</h2>
        <ol class="list-decimal list-inside space-y-3 pl-4">
            <li>Sandfly may make the Software available to you for a free trial of up to 30 days from the Start Date (<b>Trial Period</b>).</li>
            <li>Where you download, install, access and/or use the Software under a free trial, then:
                <ol class="list-decimal list-inside space-y-2 pl-6 mt-2">
                    <li>this clause 5 applies; and</li>
                    <li>these Terms apply except to the extent varied in this clause 5.</li>
                </ol>
            </li>
            <li>The Software is provided to you during the Trial Period on an <i>as is</i> and <i>as available</i> basis, and, despite any other provision in these Terms, all conditions, warranties (including warranties of merchantability or fitness for purpose), guarantees and indemnities in relation to the Software are excluded by Sandfly to the fullest extent permitted by law.</li>
            <li>No Fees are payable for your access and use of the Software during the Trial Period. You must purchase access to the paid version of the Software you wish to access and use the Software following expiry of the Trial Period.</li>
            <li>Nothing in these Terms imposes any obligation:
                <ol class="list-decimal list-inside space-y-2 pl-6 mt-2">
                    <li>on you, at the termination or expiry of the Trial Period, to purchase a license to the Software; or</li>
                    <li>on Sandfly:
                        <ul class="list-disc list-inside space-y-2 pl-6 mt-2">
                            <li>at the termination or expiry of the Trial Period, to provide you with a license to the Software; or</li>
                            <li>to maintain any feature or part of the trial version Software in any paid version of the Software.</li>
                        </ul>
                    </li>
                </ol>
            </li>
        </ol>
    </section>

    <section>
        <h2 class="text-2xl font-semibold text-cyan-400 mb-4">6. SUPPORT SERVICES</h2>
        <ol class="list-decimal list-inside space-y-3 pl-4">
            <li>Sandfly will provide you with the Support Services, provided you have:
                <ol class="list-decimal list-inside space-y-2 pl-6 mt-2">
                    <li>paid all Fees due;</li>
                    <li>maintained a proper operating environment for the use of the Software in accordance with any guidance from Sandfly, including in the Documentation; and</li>
                    <li>complied with this Agreement and the Documentation.</li>
                </ol>
            </li>
            <li>Where you consider on reasonable grounds that there is a material failure of the Software to perform in accordance with the Documentation (<b>Issue</b>), Sandfly will:
                <ol class="list-decimal list-inside space-y-2 pl-6 mt-2">
                    <li>provide telephone and email support in the form of consultation, assistance and advice in relation to the Issue; and</li>
                    <li>use reasonable efforts to assist in the resolution of the Issue (taking into account the nature and severity of the Issue).</li>
                </ol>
            </li>
             <li>The provision of support by Sandfly under section 6.2 is conditional on you:
                <ol class="list-decimal list-inside space-y-2 pl-6 mt-2">
                    <li>first using reasonable efforts to resolve the Issue by referring to the Documentation; and</li>
                    <li>contacting Sandfly during the business hours publicized on its website, via the support channels publicized on its website.</li>
                </ol>
            </li>
        </ol>
    </section>

    <section>
        <h2 class="text-2xl font-semibold text-cyan-400 mb-4">7. FEES</h2>
        <ol class="list-decimal list-inside space-y-3 pl-4">
            <li>You must pay Sandfly the Fees.</li>
            <li>Sandfly will provide you with valid Sales Tax invoices on a monthly basis in arrears for the Fees due in the previous month.</li>
            <li>The Fees exclude Sales Tax, which you must pay on taxable supplies under this Agreement.</li>
            <li>You must pay the Fees:
                <ol class="list-decimal list-inside space-y-2 pl-6 mt-2">
                    <li>within 30 days of the date of invoice; and</li>
                    <li>electronically in cleared funds without any set off or deduction except to the extent required by law. If you are required by law to make any deduction, you must pay Sandfly any additional amount that is necessary to ensure receipt by Sandfly of the full amount which Sandfly would have received but for the deduction.</li>
                </ol>
            </li>
            <li>Sandfly may charge interest on overdue amounts. Interest will be calculated from the due date to the date of payment (both inclusive) at a rate equal to the higher of 1% per month and the maximum amount permitted by law.</li>
            <li>Sandfly may increase the Fees by giving at least 30 days’ notice. If you do not wish to pay the increased Fees, you may terminate this Agreement on no less than 10 days’ notice, provided the notice is received by us before the effective date of the Fee increase. If you do not terminate this Agreement in accordance with this clause, you are deemed to have accepted the increased Fees.</li>
        </ol>
    </section>

    <section>
        <h2 class="text-2xl font-semibold text-cyan-400 mb-4">8. INTELLECTUAL PROPERTY</h2>
        <ol class="list-decimal list-inside space-y-3 pl-4">
            <li>From the date of creation or development, Sandfly owns all Intellectual Property Rights in:
                <ol class="list-decimal list-inside space-y-2 pl-6 mt-2">
                    <li>the Software and the Documentation; and</li>
                    <li>any other item or material created, developed or provided by or on behalf of Sandfly under or in connection with this Agreement.</li>
                </ol>
            </li>
            <li>If you provide Sandfly with ideas, comments or suggestions relating to the Software or the Documentation (together <b>feedback</b>):
                <ol class="list-decimal list-inside space-y-2 pl-6 mt-2">
                    <li>all Intellectual Property Rights in that feedback, and anything created as a result of that feedback (including new material enhancements, modifications or derivative works), are owned solely by Sandfly; and</li>
                    <li>Sandfly may use or disclose any feedback for any purpose.</li>
                </ol>
            </li>
        </ol>
    </section>

    <section>
        <h2 class="text-2xl font-semibold text-cyan-400 mb-4">9. WARRANTY</h2>
        <ol class="list-decimal list-inside space-y-3 pl-4">
            <li>THE SOFTWARE AND SUPPORT SERVICES ARE PROVIDED ON AN "AS IS" AND “AS AVAILABLE” BASIS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE SOFTWARE IS WITH YOU. IF THE SOFTWARE PROVES DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.</li>
            <li>WITHOUT LIMITING CLAUSE 9.1, SANDFLY MAKES NO REPRESENTATION CONCERNING THE QUALITY OF THE SOFTWARE OR SUPPORT SERVICES, AND DOES NOT PROMISE THAT THE SOFTWARE WILL BE ERROR-FREE, BUG-FREE, WILL OPERATE WITHOUT INTERRUPTION, OR WILL MEET YOUR REQUIREMENTS FOR A PARTICULAR PURPOSE.</li>
            <li>WITHOUT LIMITING CLAUSE 9.1 AND 9.2, WHERE LEGISLATION OR RULE OF LAW IMPLIES INTO THESE TERMS A CONDITION OR WARRANTY THAT CANNOT BE EXCLUDED OR MODIFIED BY CONTRACT, LIABILITY FOR THEM IS LIMITED IN ACCORDANCE WITH CLAUSE 10.2 AND 10.3.</li>
            <li>YOU AGREE AND REPRESENT THAT YOU ARE ACQUIRING THE SOFTWARE AND (IF APPLICABLE) SUPPORT SERVICES, AND ENTERING THIS AGREEMENT, FOR THE PURPOSE OF TRADE, AND TO THE EXTENT PERMISSIBLE BY LAW, ANY APPLICABLE CONSUMER PROTECTION LAW DOES NOT APPLY TO THE SUPPLY OF THE SOFTWARE, SUPPORT SERVICES OR THIS AGREEMENT, AND IT IS FAIR AND REASONABLE THAT THE PARTIES ARE BOUND BY THIS CLAUSE 9.4</li>
        </ol>
    </section>

    <section>
        <h2 class="text-2xl font-semibold text-cyan-400 mb-4">10. LIABILITY</h2>
        <ol class="list-decimal list-inside space-y-3 pl-4">
            <li>TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                <ol class="list-decimal list-inside space-y-2 pl-6 mt-2">
                    <li>YOU ACCESS AND USE THE SOFTWARE AT YOUR OWN RISK; AND</li>
                    <li>SANDFLY IS NOT LIABLE OR RESPONSIBLE TO YOU OR ANY OTHER PERSON FOR ANY CLAIM, DAMAGE, LOSS, LIABILITY AND COST UNDER OR IN CONNECTION WITH THIS AGREEMENT, THE SOFTWARE, OR YOUR ACCESS AND USE OF (OR INABILITY TO ACCESS OR USE) THE SOFTWARE. THIS EXCLUSION APPLIES REGARDLESS OF WHETHER SANDFLY’S LIABILITY OR RESPONSIBILITY ARISES IN CONTRACT, TORT (INCLUDING NEGLIGENCE), EQUITY, BREACH OF STATUTORY DUTY, OR OTHERWISE.</li>
                </ol>
            </li>
            <li>TO THE MAXIMUM EXTENT PERMITTED BY LAW AND ONLY TO THE EXTENT CLAUSE 10.1 DOES NOT APPLY, THE MAXIMUM AGGREGATE LIABILITY OF SANDFLY UNDER OR IN CONNECTION WITH THIS AGREEMENT FOR ANY LOSS OR DAMAGE IS LIMITED TO THE FEES PAID BY YOU IN THE 12 MONTHS PRIOR TO THE DATE ON WHICH THE CLAIM AROSE.</li>
            <li>DESPITE ANY OTHER PROVISION IN THIS AGREEMENT, SANDFLY IS NOT LIABLE TO YOU UNDER OR IN CONNECTION WITH THIS AGREEMENT FOR ANY:
                <ol class="list-decimal list-inside space-y-2 pl-6 mt-2">
                    <li>LOSS OF PROFIT, REVENUE, SAVINGS, BUSINESS, DATA AND/OR GOODWILL; OR</li>
                    <li>CONSEQUENTIAL, INDIRECT, INCIDENTAL OR SPECIAL DAMAGE OR LOSS OF ANY KIND.</li>
                </ol>
            </li>
        </ol>
    </section>

    <section>
        <h2 class="text-2xl font-semibold text-cyan-400 mb-4">11. TERMINATION</h2>
        <ol class="list-decimal list-inside space-y-3 pl-4">
            <li>Sandfly may, by notice to you, immediately terminate this Agreement if you are in breach of this Agreement.</li>
            <li>On termination of this Agreement you must return to Sandfly or destroy all copies of the Software and Documentation in your possession or control.</li>
            <li>Termination of this Agreement does not affect each party’s rights and obligations accrued before the termination date, including your obligations to pay all Fees payable before termination.</li>
            <li>No compensation is payable by Sandfly to you as a result of termination of this Agreement for whatever reason, and you will not be entitled to a refund of any Fees that you have already paid.</li>
        </ol>
    </section>

    <section>
        <h2 class="text-2xl font-semibold text-cyan-400 mb-4">12. GENERAL</h2>
        <ol class="list-decimal list-inside space-y-3 pl-4">
            <li>Sandfly is not liable to you for any failure to perform its obligations under this Agreement to the extent caused by events beyond its reasonable control.</li>
            <li>Any illegality, unenforceability or invalidity of a provision of this Agreement does not affect the legality, enforceability or validity of the remaining provisions of this Agreement.</li>
            <li>Any variation to this Agreement must be in writing and signed by both parties.</li>
            <li>This Agreement sets out everything agreed by the parties relating to the Software and the Support Services and supersedes and cancels anything discussed, exchanged or agreed prior. The parties have not relied on any representation, warranty or agreement relating to the Software and the Support Services that is not expressly set out in this Agreement, and no such representation, warranty or agreement has any effect.</li>
            <li>This Agreement is governed by, and must be interpreted in accordance with, the laws of New Zealand. Each party submits to the non-exclusive jurisdiction of the Courts of New Zealand in relation to any dispute connected with this Agreement.</li>
        </ol>
    </section>
  </div>
`;

const Page = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="container mx-auto px-6 py-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-12">End User License Agreement</h1>
          <div 
            className="prose prose-invert prose-lg max-w-none text-gray-300"
            dangerouslySetInnerHTML={{ __html: eulaHtml }}
          />
        </section>
      </main>
    </div>
  );
};

export default Page;
