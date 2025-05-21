import React from 'react';

import TopLevelGroup from '../../TopLevelGroup';
import useSettingGroup from '../../../hooks/useSettingGroup';
import {Heading, TextArea, Toggle, withErrorBoundary} from '@tryghost/admin-x-design-system';
const Explore: React.FC<{ keywords: string[] }> = ({keywords}) => {
    const {
        handleSave
    } = useSettingGroup();

    const handleToggleChange = (key: string, Svalue: boolean) => {
        console.log(`Toggle ${key} changed to: ${Svalue}`);
    };

    return (
        <TopLevelGroup
            keywords={keywords}
            navid='explore'
            title="Explore"
            onSave={handleSave}
        >
            <div className='flex justify-center rounded border border-green px-4 py-2 md:hidden'>
                {/* TODO: Implement mobile view */}
            </div>
            <div className='mt-4 flex flex-col gap-4'>
                <Toggle
                    checked={false} // Replace with actual state
                    direction='rtl'
                    label='Add to explore?'
                    onChange={e => handleToggleChange('explore', e.target.checked)}
                />
                <Toggle
                    checked={false} // Replace with actual state
                    direction='rtl'
                    label='Members'
                    onChange={e => handleToggleChange('members', e.target.checked)}
                />
                <Toggle
                    checked={false} // Replace with actual state
                    direction='rtl'
                    label='Revenue'
                    onChange={e => handleToggleChange('revenue', e.target.checked)}
                />
            </div>

            <div className='w-100'>
                <div className='flex items-center gap-2'>
                    <TextArea
                        placeholder='Tell us how you feel about your experience with us.'
                        title='Testamonial'
                    />
                </div>
            </div>
        </TopLevelGroup>
    );
};

export default withErrorBoundary(Explore, 'Explore');
