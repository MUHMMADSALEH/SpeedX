import * as React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

function PerformanceDisplay({ data }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Page Load Time
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.pageLoadTime !== null ? `${data.pageLoadTime} ms` : 'N/A'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Total Request Size
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.totalRequestSize !== null ? `${data.totalRequestSize} bytes` : 'N/A'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Number of Requests
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.numberOfRequests !== null ? data.numberOfRequests : 'N/A'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              First Input Delay (FID)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.firstInputDelay !== null ? `${data.firstInputDelay} ms` : 'N/A'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Cumulative Layout Shift (CLS)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.cumulativeLayoutShift !== null ? data.cumulativeLayoutShift : 'N/A'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Largest Contentful Paint (LCP)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.largestContentfulPaint !== null ? `${data.largestContentfulPaint} ms` : 'N/A'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default PerformanceDisplay;
