import React from 'react';
import { Container, Grid, Box, Typography, Card, CardContent } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import BadgeIcon from '@mui/icons-material/Badge';
import { HowItWorksSectionStyled, HowItWorksTitle, IconStyle } from '../styles/HowItWorksSectionStyles';

const HowItWorksSection = () => {
  return (
    <HowItWorksSectionStyled>
      <Container>
        <HowItWorksTitle variant="h4" align="center" gutterBottom>
          Como Funciona
        </HowItWorksTitle>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Box textAlign="center" mb={2}>
                  <PersonAddIcon style={IconStyle} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Cadastro
                </Typography>
                <Typography variant="body1">
                  Crie sua conta em poucos minutos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Box textAlign="center" mb={2}>
                  <FingerprintIcon style={IconStyle} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Autenticação
                </Typography>
                <Typography variant="body1">
                  Confirme sua identidade usando biometria.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Box textAlign="center" mb={2}>
                  <BadgeIcon style={IconStyle} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Cartão Virtual
                </Typography>
                <Typography variant="body1">
                Tenha seu cartão disponivel no celular.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </HowItWorksSectionStyled>
  );
};

export default HowItWorksSection;
