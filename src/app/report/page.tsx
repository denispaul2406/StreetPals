'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, MapPin, AlertTriangle, Send, Siren } from 'lucide-react'; // Added Siren import
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

const reportFormSchema = z.object({
  location: z.string().min(1, { message: 'Location is required.' }),
  issueType: z.enum(['Injured', 'Hungry', 'Abandoned'], {
    required_error: 'You need to select an issue type.',
  }),
  // File upload handled separately
});

type ReportFormValues = z.infer<typeof reportFormSchema>;

export default function ReportPage() {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<ReportFormValues>({
    resolver: zodResolver(reportFormSchema),
    defaultValues: {
      location: '',
      issueType: undefined,
    },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
      setPreview(null);
    }
  };

  const handleDetectLocation = () => {
    // Simulate auto-detection
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(
         (position) => {
           // In a real app, you'd reverse geocode these coords
           const mockLocation = `Near Lat: ${position.coords.latitude.toFixed(4)}, Lon: ${position.coords.longitude.toFixed(4)}`;
           form.setValue('location', mockLocation);
           toast({
             title: 'Location Detected',
             description: 'Approximate location fetched.',
           });
         },
         (error) => {
            console.error("Error getting location:", error);
            form.setValue('location', 'Mock Location - Auto (Simulated)');
             toast({
               title: 'Location Detected (Simulated)',
               description: 'Using a mock location for demonstration.',
               variant: 'default',
             });
         }
       );
     } else {
       form.setValue('location', 'Mock Location - Auto (Simulated)');
       toast({
         title: 'Location Detected (Simulated)',
         description: 'Geolocation not supported or denied. Using mock location.',
         variant: 'default',
       });
     }
  };

  async function onSubmit(data: ReportFormValues) {
    if (!file) {
      toast({
        title: 'Missing Photo/Video',
        description: 'Please upload a photo or video of the animal.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    setShowSuccess(false);

    // Simulate API call / saving data
    console.log('Report Data:', data);
    console.log('File:', file.name);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);
    toast({
      title: 'Report Submitted!',
      description: 'Alert sent to nearby rescuers. Thank you!',
    });

    // Reset form after a delay
    setTimeout(() => {
      form.reset();
      setFile(null);
      setPreview(null);
      setShowSuccess(false);
    }, 3000);
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Siren className="text-primary" /> Report a Stray Animal
          </CardTitle>
        </CardHeader>
        <CardContent>
          {showSuccess ? (
            <div className="text-center p-6 bg-green-100 text-green-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
              <p>Your report has been successfully submitted and nearby NGOs/volunteers have been alerted.</p>
              <p className="mt-4 text-sm">You will receive updates if available (simulation).</p>
              {/* Mock Chat/Call Button */}
              <Button className="mt-6" disabled>
                Chat/Call Rescuer (Simulated)
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* File Upload */}
                <FormItem>
                  <FormLabel htmlFor="animal-photo" className="flex items-center gap-2">
                    <Upload /> Upload Photo/Video
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="animal-photo"
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleFileChange}
                      className="file:text-primary file:font-medium hover:file:bg-primary/10"
                    />
                  </FormControl>
                  <FormDescription>
                    A clear photo or short video helps rescuers identify the animal and situation.
                  </FormDescription>
                  {preview && (
                    <div className="mt-4 border rounded-lg overflow-hidden shadow-sm w-fit">
                      <Image
                        src={preview}
                        alt="Animal preview"
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                  )}
                  {!file && form.formState.isSubmitted && (
                     <FormMessage>Photo/Video is required.</FormMessage>
                  )}
                </FormItem>

                {/* Location */}
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <MapPin /> Location
                      </FormLabel>
                      <div className="flex gap-2 items-center">
                        <FormControl>
                          <Input placeholder="e.g., Near City Park entrance" {...field} />
                        </FormControl>
                        <Button type="button" variant="outline" onClick={handleDetectLocation}>
                          Auto-Detect
                        </Button>
                      </div>
                      <FormDescription>
                        Enter the location or use auto-detect (requires location permission).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Issue Type */}
                <FormField
                  control={form.control}
                  name="issueType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="flex items-center gap-2">
                        <AlertTriangle /> Issue Type
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Injured" />
                            </FormControl>
                            <FormLabel className="font-normal">Injured</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Hungry" />
                            </FormControl>
                            <FormLabel className="font-normal">Hungry / Malnourished</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Abandoned" />
                            </FormControl>
                            <FormLabel className="font-normal">Abandoned / Lost</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                  {isSubmitting ? (
                     <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-r-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                      Submitting...
                    </span>
                  ) : (
                     <span className="flex items-center gap-2">
                      <Send /> Submit Report & Alert NGOs
                     </span>
                  )}
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
