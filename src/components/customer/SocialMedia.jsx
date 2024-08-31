import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CustomCard from '../common/CustomCard';
import Subtitle from '../common/Subtitle';
import {
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon,
    LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

const socialMediaIcons = {
    Facebook: <FacebookIcon />,
    Twitter: <TwitterIcon />,
    Instagram: <InstagramIcon />,
    LinkedIn: <LinkedInIcon />,
};

const SocialMedia = ({ socialMedia }) => (
    <CustomCard>
        <Subtitle title="Social Media" />
        {socialMedia.map(({ platform, link }) => (
            <Box key={platform} display="flex" alignItems="center" marginBottom={1}>
                {socialMediaIcons[platform] && (
                    <Box component="span" sx={{ marginRight: 1 }}>
                        {socialMediaIcons[platform]}
                    </Box>
                )}
                <Typography variant="body2" color="text.secondary">
                    <Link href={link} target="_blank" sx={{textDecoration:"none"}} rel="noopener">
                        {platform}
                    </Link>
                </Typography>
            </Box>
        ))}
    </CustomCard>
);

export default SocialMedia;
