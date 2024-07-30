/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo, useMemo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { Grid, Paper, Skeleton, Stack } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';
import { generateSkeletons } from 'utils/generateSkeletons';
import { sxFormPaper } from 'modules/security/audit-logs/components/AuditLogHistoryChange/styled';
import AuditLogHistoryChangeSkeleton from 'modules/security/audit-logs/components/AuditLogHistoryChange/AuditLogHistoryChangeSkeleton';
import { PaperSection } from 'components/PaperSection';

type Props = {
  view?: string;
};

const ContentTabsSkeletons = ({ view }: Props) => {
  return useMemo(() => {
    switch (view) {
      case 'inventory':
        return (
          <Stack mb={{ xs: 2, md: 4 }}>
            <DetailContent ghost>
              <FormPaper nm sx={{ marginBottom: 3 }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={6}>
                    <Grid item xs={2}>
                      <Skeleton variant='rounded' height={20} animation='wave' sx={{ marginBottom: 3 }} />
                      <Skeleton variant='rounded' height={20} animation='wave' />
                    </Grid>
                  </Grid>
                  <Grid item xs={6} display='flex' alignItems='flex-end' justifyContent='flex-end'>
                    <Grid item xs={2}>
                      <Skeleton variant='rounded' height={40} animation='wave' />
                    </Grid>
                  </Grid>
                  {generateSkeletons(48)?.map((i) => (
                    <Grid item xs={2} key={i}>
                      <Skeleton variant='rounded' height={20} animation='wave' />
                    </Grid>
                  ))}
                </Grid>
              </FormPaper>
            </DetailContent>
          </Stack>
        );
      case 'price':
        return (
          <Stack mb={{ xs: 2, md: 4 }}>
            <DetailContent ghost>
              <FormPaper nm sx={{ marginBottom: 3 }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={6}>
                    <Grid item xs={2}>
                      <Skeleton variant='rounded' height={20} animation='wave' sx={{ marginBottom: 3 }} />
                    </Grid>
                  </Grid>
                  <Grid item xs={6} display='flex' alignItems='flex-end' justifyContent='flex-end'></Grid>
                  {generateSkeletons(6)?.map((i) => (
                    <Grid item xs={6} key={i}>
                      <Skeleton variant='rounded' height={40} animation='wave' />
                    </Grid>
                  ))}
                  <Grid item xs={6} />
                  <Grid item xs={6}>
                    <div className='flex items-center justify-end gap-4'>
                      <Skeleton variant='rounded' height={40} animation='wave' width={100} />
                      <Skeleton variant='rounded' height={40} animation='wave' width={100} />
                    </div>
                  </Grid>
                </Grid>
              </FormPaper>
            </DetailContent>
          </Stack>
        );
      case 'related-product':
        return (
          <Stack mb={{ xs: 2, md: 4 }}>
            <DetailContent ghost>
              <FormPaper nm sx={{ marginBottom: 3 }}>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2}>
                    <Skeleton variant='rounded' height={20} animation='wave' />
                  </Grid>
                  <Grid item xs={12} height={0} p={0} m={0} />
                  {generateSkeletons(6)?.map((i) => (
                    <Grid item xs={2} key={i}>
                      <Skeleton variant='rounded' height={40} animation='wave' />
                    </Grid>
                  ))}
                  <Grid item xs={1.8}>
                    <Skeleton variant='rounded' height={40} animation='wave' />
                  </Grid>
                  <Grid item xs={12} height={0} p={0} m={0} />
                  {generateSkeletons(36)?.map((i) => (
                    <Grid item xs={2} key={i}>
                      <Skeleton variant='rounded' height={20} animation='wave' sx={{ marginBottom: 3 }} />
                    </Grid>
                  ))}
                </Grid>
              </FormPaper>
            </DetailContent>
          </Stack>
        );
      case 'seo':
        return (
          <Stack mb={{ xs: 2, md: 4 }}>
            <DetailContent ghost>
              <FormPaper nm sx={{ marginBottom: 3 }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={6}>
                    <Grid item xs={2}>
                      <Skeleton variant='rounded' height={20} animation='wave' sx={{ marginBottom: 3 }} />
                    </Grid>
                    <Grid item xs={6}>
                      <Skeleton variant='rounded' height={20} animation='wave' sx={{ marginBottom: 3 }} />
                    </Grid>
                  </Grid>
                  <Grid item xs={6} p={0} m={0} height={0} />
                  {generateSkeletons(4)?.map((i) => (
                    <Grid item xs={12} key={i}>
                      <Skeleton variant='rounded' height={i % 2 === 0 ? 100 : 40} animation='wave' />
                    </Grid>
                  ))}
                </Grid>
              </FormPaper>
            </DetailContent>
          </Stack>
        );
      case 'rate':
        return (
          <Stack mb={{ xs: 2, md: 4 }}>
            <DetailContent ghost>
              <FormPaper nm sx={{ marginBottom: 3 }}>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2}>
                    <Skeleton variant='rounded' height={20} animation='wave' />
                  </Grid>
                  <Grid item xs={12} height={0} p={0} m={0} />
                  {generateSkeletons(6)?.map((i) => (
                    <Grid item xs={2} key={i}>
                      <Skeleton variant='rounded' height={40} animation='wave' />
                    </Grid>
                  ))}
                  <Grid item xs={1.8}>
                    <Skeleton variant='rounded' height={40} animation='wave' />
                  </Grid>
                  <Grid item xs={12} height={0} p={0} m={0} />
                  {generateSkeletons(36)?.map((i) => (
                    <Grid item xs={2} key={i}>
                      <Skeleton variant='rounded' height={20} animation='wave' sx={{ marginBottom: 3 }} />
                    </Grid>
                  ))}
                </Grid>
              </FormPaper>
            </DetailContent>
          </Stack>
        );
      case 'history_change':
        return (
          <Stack mb={{ xs: 2, md: 4 }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={12}>
                <PaperSection
                  nm
                  // @ts-ignore
                  title={() => <Skeleton variant='rounded' height={20} animation='wave' />}
                  sx={{ ...sxFormPaper.sx }}
                >
                  <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={7}>
                      <Skeleton variant='rounded' height={40} animation='wave' />
                    </Grid>
                    <Grid item xs={1}>
                      <Skeleton variant='rounded' height={40} animation='wave' />
                    </Grid>
                    <Grid item xs={1}>
                      <Skeleton variant='rounded' height={40} animation='wave' />
                    </Grid>
                    <Grid item xs={1}>
                      <Skeleton variant='rounded' height={40} animation='wave' />
                    </Grid>
                    <Grid item xs={2}>
                      <Skeleton variant='rounded' height={40} animation='wave' />
                    </Grid>
                  </Grid>
                </PaperSection>
              </Grid>
              <Grid item xs={5}>
                <PaperSection
                  nm
                  // @ts-ignore
                  title={() => <Skeleton variant='rounded' height={20} animation='wave' />}
                  sx={{ ...sxFormPaper.sx }}
                >
                  <AuditLogHistoryChangeSkeleton />
                </PaperSection>
              </Grid>
              <Grid item xs={7}>
                <Paper sx={{ ...sxFormPaper.sx, mb: { xs: 1, md: 2 } }}>
                  <Grid container spacing={0.7} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={10}>
                      <Skeleton variant='rounded' height={20} animation='wave' sx={{ maxWidth: 200 }} />
                    </Grid>
                    <Grid item xs={2}>
                      <Skeleton variant='rounded' height={20} animation='wave' />
                    </Grid>
                    <Grid item xs={12}>
                      <Skeleton variant='rounded' height={20} animation='wave' sx={{ maxWidth: 250 }} />
                    </Grid>
                    <Grid item xs={2}>
                      <Skeleton variant='rounded' height={20} animation='wave' sx={{ maxWidth: 250 }} />
                    </Grid>
                    <Grid item xs={3}>
                      <Skeleton variant='rounded' height={20} animation='wave' sx={{ maxWidth: 250 }} />
                    </Grid>
                    <Grid item xs={7}>
                      <div className='flex items-center justify-end w-full'>
                        <Skeleton
                          variant='rounded'
                          height={20}
                          animation='wave'
                          sx={{ width: '100%', maxWidth: 100 }}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
                <FormPaper nm sx={{ marginBottom: 3 }}>
                  <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2}>
                      <Skeleton variant='rounded' height={20} animation='wave' />
                    </Grid>
                    <Grid item xs={12} height={0} p={0} m={0} />
                    {generateSkeletons(36)?.map((i) => (
                      <Grid item xs={2} key={i}>
                        <Skeleton variant='rounded' height={20} animation='wave' sx={{ marginBottom: 3 }} />
                      </Grid>
                    ))}
                  </Grid>
                </FormPaper>
              </Grid>
            </Grid>
          </Stack>
        );
      default:
        return (
          <Stack mb={{ xs: 2, md: 4 }}>
            <DetailLayout>
              <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }}>
                <FormPaper nm sx={{ marginBottom: 3 }}>
                  <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {generateSkeletons(3)?.map((i) => (
                      <Grid item xs={12} key={i}>
                        <Skeleton variant='rounded' height={40} animation='wave' />
                      </Grid>
                    ))}
                  </Grid>
                </FormPaper>
                <FormPaper nm sx={{ marginBottom: 3 }}>
                  <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {generateSkeletons(3)?.map((i) => (
                      <Grid item xs={12} key={i}>
                        <Skeleton variant='rounded' height={40} animation='wave' />
                      </Grid>
                    ))}
                  </Grid>
                </FormPaper>
                <FormPaper nm sx={{ marginBottom: 3 }}>
                  <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {generateSkeletons(3)?.map((i) => (
                      <Grid item xs={12} key={i}>
                        <Skeleton variant='rounded' height={40} animation='wave' />
                      </Grid>
                    ))}
                  </Grid>
                </FormPaper>
              </DetailSummary>
              <DetailContent ghost>
                <FormPaper nm sx={{ marginBottom: 3 }}>
                  <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2}>
                      <Skeleton variant='rounded' height={20} animation='wave' />
                    </Grid>
                    <Grid item xs={2}>
                      <Skeleton variant='rounded' height={20} animation='wave' />
                    </Grid>
                    {generateSkeletons(5)?.map((i) => (
                      <Grid item xs={12} key={i}>
                        <Skeleton variant='rounded' height={40} animation='wave' />
                      </Grid>
                    ))}
                  </Grid>
                </FormPaper>
                <FormPaper nm sx={{ marginBottom: 3 }}>
                  <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2}>
                      <Skeleton variant='rounded' height={20} animation='wave' />
                    </Grid>
                    <Grid item xs={2}>
                      <Skeleton variant='rounded' height={20} animation='wave' />
                    </Grid>
                    {generateSkeletons(3)?.map((i) => (
                      <Grid item xs={12} key={i}>
                        <Skeleton variant='rounded' height={40} animation='wave' />
                      </Grid>
                    ))}
                  </Grid>
                </FormPaper>
              </DetailContent>
            </DetailLayout>
          </Stack>
        );
    }
  }, [view]);
};

export default memo(ContentTabsSkeletons);
