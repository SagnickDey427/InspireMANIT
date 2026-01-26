import { Grid, Container, Typography, Box } from '@mui/material';
import MemberInfoCard from './MemberInfoCard';

// PRO TIP: Import images like this so Webpack/Vite can bundle them
import aboutUsImg from '../../assets/AboutUsImage.jpg'; 

const members = [
    {
        name: "Anurag Sharma",
        role: "President",
        year: "4th Year",
        branch: "CSE",
        image: aboutUsImg // Use relative paths or URLs in production
    },
    {
        name: "Anurag Sharma",
        role: "President",
        year: "4th Year",
        branch: "CSE",
        image: aboutUsImg
    },
    {
        name: "Anurag Sharma",
        role: "President",
        year: "4th Year",
        branch: "CSE",
        image: aboutUsImg
    },
    {
        name: "Anurag Sharma",
        role: "President",
        year: "4th Year",
        branch: "CSE",
        image: aboutUsImg
    },
    {
        name: "Anurag Sharma",
        role: "President",
        year: "4th Year",
        branch: "CSE",
        image: aboutUsImg
    },
    {
        name: "Anurag Sharma",
        role: "President",
        year: "4th Year",
        branch: "CSE",
        image:aboutUsImg
    }
];

export default function OurMembers() {
    return (
        <Container sx={{ py: 8 }}>
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 800, mb: 6 }}>
                Our Team
            </Typography>
            
            {/* container: defines this as a grid wrapper
                spacing: adds gap between cards
                columns: defines how many "units" wide the grid is
            */}
            <Grid container spacing={4} justifyContent="center">
                {members.map((member, index) => (
                    // xs={12}: Full width on mobile
                    // sm={6}: Half width on tablets
                    // md={4}: One-third width on desktops
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <MemberInfoCard member={member} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}