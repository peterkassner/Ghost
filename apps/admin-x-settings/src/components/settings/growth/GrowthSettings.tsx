import EmbedSignupForm from './embedSignup/EmbedSignupForm';
import Explore from './Explore';
import Offers from './Offers';
import React from 'react';
import Recommendations from './Recommendations';
import SearchableSection from '../../SearchableSection';
import TipsAndDonations from './TipsAndDonations';
import {checkStripeEnabled, getSettingValues} from '@tryghost/admin-x-framework/api/settings';
import {useGlobalData} from '../../providers/GlobalDataProvider';

export const searchKeywords = {
    tips: ['growth', 'tips', 'donations', 'one time', 'payment'],
    embedSignupForm: ['growth', 'embeddable signup form', 'embeddable form', 'embeddable sign up form', 'embeddable sign up'],
    recommendations: ['growth', 'recommendations', 'recommend', 'blogroll'],
    offers: ['growth', 'offers', 'discounts', 'coupons', 'promotions'],
    explore: ['growth', 'explore', 'explore settings', 'explore growth settings']
};

const GrowthSettings: React.FC = () => {
    const {config, settings} = useGlobalData();
    const [hasTipsAndDonations] = getSettingValues(settings, ['donations_enabled']) as [boolean];
    const hasStripeEnabled = checkStripeEnabled(settings || [], config || {});

    return (
        <SearchableSection keywords={Object.values(searchKeywords).flat()} title='Growth'>
            <Recommendations keywords={searchKeywords.recommendations} />
            <EmbedSignupForm keywords={searchKeywords.embedSignupForm} />
            {hasStripeEnabled && <Offers keywords={searchKeywords.offers} />}
            {hasTipsAndDonations && hasStripeEnabled && <TipsAndDonations keywords={searchKeywords.tips} />}
            <Explore keywords={searchKeywords.explore} />

        </SearchableSection>
    );
};

export default GrowthSettings;
